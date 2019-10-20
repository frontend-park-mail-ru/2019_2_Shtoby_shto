export default class Router {
  // constructor(app) {
  // constructor(app, headView, footerView) {
  constructor(app, HeadView) {
  // constructor(app) {
    this.routes = {};

    this.root = app;

    const el = document.createElement('header');
    const hview = new HeadView(el);

    hview.show();
    this.root.appendChild(el);
  }

  register(path, view) {
    this.routes[path] = {
      View: view,
      view: null,
      el: null,
    };

    return this;
  }

  registerBunch(pathsViewsObject) {
    Object.keys(pathsViewsObject).forEach((key, index) => {
      this.register(key, pathsViewsObject[key]);
    });
  }

  open(path) {
    const route = this.routes[path];

    if (!route) {
      this.open('/');
      return;
    }

    if (window.location.pathname !== path) {
      window.history.pushState(
          null,
          '',
          path
      );
    }

    let {View, view, el} = route;

    if (!el) {
      el = document.createElement('section');
      this.root.appendChild(el);
    }

    if (!view) {
      view = new View(el);
    }

    if (!view.active) {
      Object.values(this.routes).forEach(function({view}) {
        if (view && view.active) {
          view.hide();
        }
      });

      view.show();
    }

    this.routes[path] = {View, view, el};
  }

  start() {
    opener = function(event) {
      if (!(event.target instanceof HTMLAnchorElement)) {
        return;
      }

      event.preventDefault();
      const link = event.target;

      console.log(link.pathname);

      this.open(link.pathname);
    }.bind(this);

    this.root.addEventListener('click', opener);
    // this.header.addEventListener('click', opener);
    // this.footer.addEventListener('click', opener);

    window.addEventListener('popstate', function() {
      const currentPath = window.location.pathname;

      this.open(currentPath);
    }.bind(this));

    const currentPath = window.location.pathname;

    this.open(currentPath);
  }
};
