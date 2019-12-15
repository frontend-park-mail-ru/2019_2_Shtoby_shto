import Component from '../modules/Component';

import * as routerActions from '../actions/Router';

const routerIdentificator = new class {
  constructor() {
    this.routerCounter = 0;
  }

  identificate() {
    this.routerCounter += 1;
    return this.routerCounter - 1;
  }
}();

export default class Router extends Component {
  constructor(...args) {
    super(...args);
  
    this.routerId = routerIdentificator.identificate();
  }

  didMount() {
    const routerState = this.attrs.store.state.router; 

    if (
      !(this.routerId in routerState)
    ) {
      console.log('registering');
      this.attrs.store.dispatch(routerActions.registerRouter(
        this.routerId,
        this.attrs.default,
      ))
    }

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
    const myRouter = this.attrs.store.state.router[this.routerId];
    // const view = myRouter ? myRouter.route : undefined;
    const route = myRouter ? myRouter.route : undefined;
    const view = this.attrs.routes[route];

    // console.log(view);

    return {
      tag: 'div',
      attrs: {
        class: 'router',
      },
      children: [...(view ? [{...view, key: this.attrs.route}] : ['no route'])],
    };
  }
}
