import BaseView from '../../modules/BaseView';
import bus from '../../modules/bus';

const template = require('./headMenu.pug');
import './headMenu.css';

export default class HeaderView extends BaseView {
  constructor(el) {
    super(el);

    this.el.class = 'header';
    this.el.innerHTML = template();
    this.loggedIn = false;

    bus.on('got_user', () => {
      this.loggedIn = true;
      this.render();
    });

    bus.on('logged_out', () => {
      this.loggedIn = false;
      this.render();
    });
  }

  render() {
    if (!this.loggedIn) {
      bus.emit('fetch_user');
    }

    this.showPanels();
  }

  showPanels() {
    const profileButton = document.querySelector('li.profile');
    const loginButton = document.querySelector('li.login');
    const logoutButton = document.querySelector('li.logout');
    const boardButton = document.querySelector('li.board');

    if (profileButton) {
      profileButton.hidden = !this.loggedIn;
      logoutButton.hidden = !this.loggedIn;
      boardButton.hidden = !this.loggedIn;
      loginButton.hidden = this.loggedIn;
    }
  }

  // switchToLoggedIn() {
  //   this.loggedIn = true;
  //   this.render();
  // }
}
