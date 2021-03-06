import Component from '../modules/Component';
import StateComponent from './StateComponent';

export default class Router extends Component {
  constructor(defaultRoute) {
    super({classes: ['root__router']});

    this.history = false;

    this.views = {};

    this.viewer = new StateComponent();
    this.addChild(this.viewer, 'view');
    this.defaultRoute = defaultRoute;

    this.currentRoute = null;
  }

  startRouting() {
    this.element.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }
      e.preventDefault();

      const route = e.target.pathname;
      if (this.views[route]) {
        this.open(route);
        e.stopPropagation();
      }
    });

    this.openDefault();

    return this;
  }

  openDefault(force) {
    if (force) {
      this.open(this.defaultRoute);
    }

    let toOpen = this.defaultRoute;

    if (this.history) {
      const currentPath = window.location.pathname;
      if (this.views[currentPath]) {
        toOpen = currentPath;
      }
    }

    if (this.views[toOpen]) {
      this.open(toOpen);
    } else {
      console.log('couldn\'t open', toOpen);
    }
  }

  useHistory() {
    this.history = true;

    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;
      this.open(currentPath);
    });

    const oldOpener = this.open.bind(this);

    this.open = (route) => {
      if (window.location.pathname !== route) {
        if (!(this.views[route] instanceof Function)) {
          window.history.pushState(null, '', route);
        }
      }

      oldOpener(route);
    };

    return this;
  }

  registerView(route, view) {
    this.views[route] = view;

    if (!(view instanceof Function)) {
      this.viewer.addState(route, view);
    }

    return this;
  }

  open(route) {
    if (this.views[route] instanceof Function) {
      this.views[route]();
    } else {
      this.viewer.setState(route);
      this.currentRoute = route;
    }

    this.render();

    return this;
  }

  setDefaultRoute(route) {
    this.defaultRoute = route;

    return this;
  }

  generateContent() {
    return '<view>';
  }

  getMounts() {
    return {view: this.element.getElementsByTagName('view')[0]};
  }
}
