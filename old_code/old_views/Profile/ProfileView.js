import BaseView from '../../modules/BaseView';
import bus from '../../modules/bus';

const template = require('./profile.pug');
import './profile.css';

export default class ProfileView extends BaseView {
  constructor(el) {
    super(el);

    this.user = null;

    this.el.innerHTML = template();
    bus.on('got_user', this.fillUser.bind(this));
  }

  render() {
    if (!this.user) {
      bus.emit('fetch_user');
    }
  }

  fillUser(user) {
    console.log('filling user', user);
    this.user = user;

    const username = document.getElementById('username');
    username.value = user.login;

    const password = document.getElementById('password');
    password.value = user.password;
  }
}
