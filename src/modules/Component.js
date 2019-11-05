import makeElement from './Utils/makeElement';

const defaultProps = {
  tag: 'div',
  classes: [],
  style: {},
  id: null,
  attrs: {},
  content: '',
};

export default class Component {
  constructor(ownProps) {
    const elementProps = {};
    Object.assign(elementProps, defaultProps, ownProps);

    this.element = makeElement(
        elementProps.tag,
        elementProps.classes,
        elementProps.style,
        elementProps.id,
        elementProps.attrs,
    );

    this.element.component = this;

    this.props = {content: elementProps.content, ...ownProps};
    this.parent = null;
    this.children = [];

    this.store = undefined;

    this.render();
  }

  connect(store) {
    this.store = store;

    return this;
  }

  dispatch(action) {
    this.store.dispatch(action);
  }

  subscribe(selector) {
    this.store.subscribe(this.stateUpdate.bind(this), selector);
  }

  // компонент меняется местами с другим элементом
  replaceElem(elem) {
    elem.replaceWith(this.element);
  }

  forEachChildSmart(fun) {
    this.children.forEach(fun);

    return this;
  }

  forEachChild(fun) {
    this.forEachChildSmart(
        (child) => fun(child.component, child.index)
    );

    return this;
  }

  // эта функция нужна для полной перерисовки внутренностей компонента
  render() {
    this.element.innerHTML = this.generateContent(this.props);
    this.setup(this.props);

    this.attachChildren();
    this.renderChildren();
  }

  attachChildren() {
    this.forEachChildSmart((child) => {
      if (child.mounted) {
        child.component.replaceElem(this.getMounts()[child.mount]);
      } else {
        if (child.prepended) {
          this.element.prepend(child.component.element);
        } else {
          this.element.appendChild(child.component.element);
        }
      }
    });
  }

  renderChildren() {
    this.forEachChildSmart((child) => child.component.render());
  }

  addChild(component, mount) {
    component.parent = this;

    const child = {
      component: component,
      mounted: false,
      index: this.children.length,
    };

    if (mount) {
      if (mount === 'prepend') {
        child.prepended = true;
      } else {
        child.mounted = true;
        child.mount = mount;
      }
    }

    this.children.push(child);
    child.component.onAdd();

    this.render();

    return this;
  }

  getChild(mount) {
    let child = undefined;

    switch (typeof mount) {
      case 'string':
        this.forEachChildSmart((c) => {
          if (c.mounted && c.mount === mount) child = c.component;
        });
        break;
      case 'number':
        child = this.children[mount].component;
        break;
    }

    return child;
  }

  deleteChild(component) {
    this.forEachChild((child, index) => {
      if (component === child) {
        component.parent = null;
        this.children.splice(index, 1);
      }
    });

    this.render();

    return this;
  }

  swapChild(childComp, comp) {
    this.forEachChildSmart((child) => {
      if (child.component === childComp) {
        child.component.parent = null;
        child.component = comp;
        comp.parent = this;
      }
    });

    this.render();

    return this;
  }

  detach() {
    this.parent.deleteChild(this);

    return this;
  }

  addStyle(style) {
    this.element.classList.add(style);

    return this;
  }

  apply(fun) {
    fun(this);

    return this;
  }

  stylize(style) {
    this.element.style = style;

    return this;
  }

  update(updateEvent) {
    this.handleUpdate(this, updateEvent);
    this.render();

    return this;
  }

  setUpdateHandler(fun) {
    this.handleUpdate = fun;

    return this;
  }


  // вызывается один раз перед стартом всего приложения
  // тут самое место подписке на обновления в сторе
  init() {}

  // вызывается при обновлении state в подписанном store
  stateUpdate(newState) {}

  // вызывается при добавлении компонента в другой компонент
  onAdd() {}

  // нужно перегружать
  generateContent(props) {
    return typeof props.content === typeof (() => {}) ?
      props.content(props) :
      props.content;
  }

  // нужно перегружать
  handleUpdate(comp, updateEvent) {
    comp.props = {...comp.props, ...updateEvent};
  }

  // нужно перегружать
  getMounts() {}

  // нужно перегружать
  setup(props) {}
}
