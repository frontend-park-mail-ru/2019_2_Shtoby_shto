import Router from './Router';

export default class AuthRouter extends Router {
  constructor(defaultRoute) {
    super(defaultRoute);

    this.auth = undefined;
    this.authNeeded = [];

    this.accessibility = {};
    this.fallbacks = {};
  }

  registerViewAuth(route, view, fallbackRoute) {
    this.registerViewWithAccess(route, view, true, fallbackRoute);
  }

  registerViewNoAuth(route, view, fallbackRoute) {
    this.registerViewWithAccess(route, view, false, fallbackRoute);
  }

  registerViewWithAccess(route, view, access, fallbackRoute) {
    super.registerView(route, view);

    if (typeof access !== 'undefined') {
      this.accessibility[route] = access;
    }

    if (fallbackRoute) {
      this.fallbacks[route] = fallbackRoute;
    }
  }

  open(route) {
    const canOpen = this.checkAccessibility(route);
    if (canOpen) {
      super.open(route);
    } else {
      const fallback = this.fallbacks[route];

      if (fallback) {
        if (this.history) {
          window.history.pushState(null, '', fallback);
        }
        super.open(fallback);
      } else {
        this.openDefault(true);
      }
    }
  }

  setAfterLogin(route) {
    this.afterLogin = route;

    return this;
  }

  openAfterLogin() {
    if (this.afterLogin) {
      this.open(this.afterLogin);
    } else {
      this.openDefault(true);
    }
  }

  setAfterLogout(route) {
    this.afterLogout = route;

    return this;
  }

  openAfterLogout() {
    if (this.afterLogout) {
      this.open(this.afterLogout);
    } else {
      this.openDefault(true);
    }
  }

  checkAccessibility(route) {
    if (route in this.accessibility) {
      return (this.accessibility[route] === this.auth);
    } else {
      return true;
    }
  }

  init(state) {
    this.auth = state.user.loggedIn || false;
    this.subscribe((state) => state.user.loggedIn);
  }

  stateUpdate(loggedIn) {
    this.auth = loggedIn || false;

    if (loggedIn) {
      this.openAfterLogin();
    } else {
      this.openAfterLogout();
    }
  }
}
