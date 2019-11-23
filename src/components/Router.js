import Component from "../modules/Component";

export default class Router extends Component {
  didCreate() {
    this.history = this.attrs.history || false;
    this.routes = this.attrs.routes || {};
    this.default = this.attrs.default || false;

    // this.route = undefined;
    // this.attrs.route 

    console.log(this);
  }

  didMount() {
    this.el.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }
      e.preventDefault();

      this.open(e.target.pathname);
    });

    this.openDefault();
  }

  openDefault() {
    console.log('tryna open default');

    if (this.attrs.default) {
      this.open(this.attrs.default);
    }
  }

  open(path) {
    console.log('tryna open', path);

    if (!(this.routes[path])) {
      return;
    }

    console.log('ok opening now');

    this.updateAttrs({route: path});
  }

  render() {
    const route = this.attrs.routes[this.attrs.route];

    console.log(route);

    // return route ? {tag: route} : 'no route';

    // return route ? { tag: 'router', children: [{tag: route} ] } : { tag: 'router', children: ['ass']};

    return {
      tag: 'router',
      children: [
        route ? route
          // ? typeof route === 'function'
            // ? { tag: route }
            // : route
          : 'no route'
        ]
    }

    // return {
    //   tag: 'router',
    //   children: route ? [route] : [
    //     'ass',
    //   ]
    // }

  }
}
