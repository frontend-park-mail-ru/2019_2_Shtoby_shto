import Component from '../../modules/Component';

import './profile.css';
const template = require('./profile.pug');

import * as userActions from '../../actions/User';

export default class ProfileView extends Component {
  constructor() {
    super();

    this.username = '';
  }

  generateContent() {
    return template();
  }

  setup() {
    this.element.querySelector('#saveDataButton')
        .addEventListener('click', (e) => {
          e.preventDefault();
          this.updateUser(username.value);
        });
  }

  updateLoginField(name) {
    const username = this.element.querySelector('#username');
    username.value = name;
  }

  updateUser(login) {
    this.dispatch(userActions.updateLogin(this.user.id, login));
  }

  init(state) {
    this.user = state.user;

    if (this.user) {
      this.updateLoginField(this.user.login);
      this.subscribe((state) => state.user);
    }
  }

  stateUpdate(user) {
    if (user) {
      this.user = user;
      this.updateLoginField(this.user.login);
    }
  }
}
