import Router from './Router';

export default class AuthRouter extends Router {
  constructor(defaultRoute) {
    super(defaultRoute);

    this.authNeeded = [];
  }

  registerView(route, needAuth, view) {
    super.registerView(route, view);

    if (needAuth) {
      this.authNeeded.push(route);
    }
  }

  checkAccesibility(route) {
    let needAuth = false;

    this.authNeeded.forEach((r) => {
      if (r == route) {
        needAuth = true;
      };
    });

    return needAuth;
  }

  stateUpdate(loggedIn) {
    this.auth = loggedIn;

    if (!this.auth && this.checkAccesibility(this.currentRoute)) {
      this.openDefault(true);
    }
  }

  open(route) {
    const needAuth = this.checkAccesibility(route);

    if (needAuth && !this.auth) {
      this.openDefault(true);
      return;
    }

    super.open(route);
  }

  init() {
    this.subscribe((state) => state.user.loggedIn);
  }
}
