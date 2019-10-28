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
    bus.on('got_avatar', this.putAvatar.bind(this));

    this.saveData = document.getElementById('saveDataButton');
    this.saveData.addEventListener('click', this.changeInfo.bind(this));

    this.saveAvatar = document.getElementById('saveAvatarButton');
    this.saveAvatar.addEventListener('click', this.changeAvatar.bind(this));
  }

  render() {
    if (!this.user) {
      bus.emit('fetch_user');
      bus.emit('fetch_avatar');
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

  // TODO: отобразить бинарный файл
  putAvatar(photo) {
    console.log('photo', photo);
    this.photo = photo;
    console.log('current avatar: ', btoa(this.photo));

    const avatar = document.getElementById('avatar');
    avatar.setAttribute('src', photo);
  }

  changeInfo(event) {
    event.preventDefault();
    console.log('changing data');

    const newName = document.getElementById('username').value;
    const newPassword = document.getElementById('password').value;

    const body = {'login': newName, 'password': newPassword};
    bus.emit('update_profile', body);
  }

  changeAvatar(event) {
    event.preventDefault();
    console.log('changing avatar');

    const newAvatar = new FormData(document.forms.namedItem('fileinfo'));
    console.log('what to send:', newAvatar);

    bus.emit('update_avatar', newAvatar);
  }
}
