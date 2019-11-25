import Router from './Router';

export default class HistoryRouter extends Router {
  didMount() {
    super.didMount();

    window.addEventListener('popstate', () => {
      this.open(window.location.pathname, true);
    });
  }

  open(path, fromPopping) {
    const opened = super.open(path);

    if (opened) {
      if (!fromPopping) {
        window.history.pushState(
            null,
            '',
            this.attrs.route || this.attrs.default || '',
        );
      }
    } else {
      if (typeof this.attrs.routes[path] === 'function' && (!(this.attrs.route))) {
        window.history.back();
      }
    }

    return opened;
  }

  openDefault() {
    if (this.attrs.routes[window.location.pathname]) {
      this.open(window.location.pathname);
    } else {
      super.openDefault();
    }
  }
}
