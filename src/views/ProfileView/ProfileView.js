import Component from '../../modules/Component';

import './profile.css';
const template = require('./profile.pug');

import * as userActions from '../../actions/User';

export default class ProfileView extends Component {
  constructor() {
    super();

    this.userName = '';
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

  setGeneratedAvatar(name) {
    const letter = name.substr(0, 2);
    const backgroundColor = userActions.generateAvatar(name);
    const elementAvatar = document.getElementById('avatar');

    elementAvatar.innerHTML = letter;
    elementAvatar.style.backgroundColor = backgroundColor;
  }

  updateUser(login) {
    this.dispatch(userActions.updateLogin(this.userId, login));
  }

  init(state) {
    this.userName = state.user.login;
    this.userId = state.user.id;

    this.updateLoginField(this.userName);
    this.setGeneratedAvatar(this.userName);

    this.subscribe((state) => {
      return {login: state.user.login};
    });

    this.subscribe((state) => {
      return {id: state.user.id};
    });
  }

  stateUpdate(stateUpdate) {
    if ('login' in stateUpdate) {
      this.updateLoginField(stateUpdate.login);
    }

    if ('id' in stateUpdate) {
      this.userId = stateUpdate.id;
    }
  }
}
