import Router from './Router';

export default class AuthRouter extends Router {
  constructor(defaultRoute) {
    super(defaultRoute);

    this.auth = true;
    this.authNeeded = [];

    this.afterLogin = undefined;
    this.afterLogout = undefined;
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

  setAfterLogin(route) {
    this.afterLogin = route;

    return this;
  }

  openAfterLogin() {
    console.log('opening after login');

    if (this.afterLogin) {
      console.log(this.afterLogin);
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

  stateUpdate(loggedIn) {
    const wasLogged = this.auth || false;
    this.auth = loggedIn;

    console.log('was logge', wasLogged, 'this auth', this.auth);

    switch (wasLogged) {
      case true:
        switch (this.auth) {
          case true: break;
          case false: this.openAfterLogout(); break;
        }
        break;
      case false:
        switch (this.auth) {
          case true: this.openAfterLogin(); break;
          case false:
            if (!this.checkAccesibility(this.currentRoute)) {
              this.openDefault(true);
            }
            break;
        }
        break;
    }

    // if (this.auth )

    // if (!this.auth && this.checkAccesibility(this.currentRoute)) {
    //   this.openDefault(true);
    // }
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
