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
    bus.emit('fetch_user', {});
    bus.on('got_user', this.switchToLoggedIn.bind(this));
  }

  render() {
    this.showPanels();
  }

  showPanels() {
    const profileButton = document.querySelector('li.profile');
    const loginButton = document.querySelector('li.login');

    if (profileButton) {
      profileButton.hidden = !this.loggedIn;
      loginButton.hidden = this.loggedIn;
    }
  }

  switchToLoggedIn() {
    this.loggedIn = true;
    this.render();
  }
}
