import Component from '../modules/Component';

export default class Router extends Component {
  didMount() {
    this.el.addEventListener('click', this.linkOpener.bind(this));

    this.openDefault();
  }

  linkOpener(e) {
    if (!(e.target instanceof HTMLAnchorElement)) {
      return;
    }
    e.preventDefault();

    this.open(e.target.pathname);
  }

  openDefault() {
    if (this.attrs.default) {
      this.open(this.attrs.default);
    }
  }

  open(path) {
    const route = this.attrs.routes[path];

    if (typeof route === 'function') {
      route();
      return false;
    }

    if (!route) {
      this.openDefault();
      return false;
    }

    this.updateAttrs({route: path});
    return true;
  }

  render() {
    const view = this.attrs.routes[this.attrs.route];

    return {
      tag: 'div',
      attrs: {
        class: 'router',
      },
      children: [...(view ? [{...view, key: this.attrs.route}] : ['no route'])],
    };
  }
}
