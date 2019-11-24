import Component from '../../modules/Component';

import './profile.css';
const template = require('./profile.pug');

import * as userActions from '../../actions/User';
import generateAvatar from '../../modules/Utils/generateAvatar';

export default class ProfileView extends Component {
  constructor() {
    super();

    this.userName = '';
  }

  generateContent() {
    return template();
  }

  getMounts() {
    return {
      avatar: this.element.querySelector('#avatar'),
    }
  }

  setup() {
    this.element.querySelector('#saveDataButton')
        .addEventListener('click', (e) => {
          e.preventDefault();
          this.updateUser(username.value);
        });

    if (this.userName) {
      this.setGeneratedAvatar(this.userName);
    }
  }

  updateLoginField(name) {
    const username = this.element.querySelector('#username');
    this.setGeneratedAvatar(this.userName);
    username.value = name;
  }

  setGeneratedAvatar(name) {
    const letter = name.substr(0, 2);
    const backgroundColor = generateAvatar(name);
    // const elementAvatar = document.getElementById('avatar');
    const elementAvatar = this.getMounts()['avatar'];

    elementAvatar.innerHTML = letter;
    elementAvatar.style.backgroundColor = backgroundColor;
  }

  updateUser(login) {
    this.dispatch(userActions.updateLogin(this.userId, login));
  }

  init(state) {
    this.userName = state.user.login;
    this.userId = state.user.id;

    if (this.userName) {
      this.updateLoginField(this.userName);
    }

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
