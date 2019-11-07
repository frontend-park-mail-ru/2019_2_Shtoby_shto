import Ajax from './Ajax';

export default class UserService {
  constructor(addr) {
    this.ajax = new Ajax(addr);
  }

  login(info) {
    return this.ajax.request('POST', '/login', info);
  }

  logout() {
    return this.ajax.request('GET', '/logout');
  }

  register(info) {
    console.log('sending this to back:', info);
    return this.ajax.request('POST', '/users/registration', info);
  }

  fetchUser() {
    return this.ajax.jsonRequest('GET', '/users');
  }

  updatingData(info) {
    const newInfo = {login: info.login};
    console.log(newInfo);
    return this.ajax.request('PUT', '/users', newInfo);
  }

  updatingAvatar(photo) {
    return this.ajax.jsonRequest('POST', '/photo', photo);
  }

  fetchAvatar() {
    return this.ajax.request('GET', '/photo');
  }

  registerEvents(bus) {
    bus.on('try_login', (info) => {
      this.login(info)
          .then(() => {
            bus.emit('logged_in');
          })
          .catch((err) => {
            console.log(err);
            bus.emit('login_failed');
          });
    });

    bus.on('try_register', (info) => {
      this.register(info)
          .then(() => {
            console.log('then worked');
            bus.emit('logged_in');
          })
          .catch((err) => {
            console.log(err);
            bus.emit('login_failed');
          });
    });

    bus.on('logout', () => {
      this.logout()
          .then(() => {
            bus.emit('logged_out');
          });
    });

    bus.on('fetch_user', () => {
      this.fetchUser()
          .then((user) => {
            bus.emit('got_user', user);
          })
          .catch((err) => {});
    });

    bus.on('fetch_avatar', ()=>{
      this.fetchAvatar()
          .then((photo) => {
            bus.emit('got_avatar', photo);
          })
          .catch((err) => {});
    });
  }

  profileEvents(bus) {
    bus.on('update_profile', (newData)=>{
      this.updatingData(newData)
          .then(()=>{
            console.log('updated');
            bus.emit('logged_in');
          })
          .catch((err)=>{
            console.log(err);
            bus.emit('updating_failed');
          });
    });

    bus.on('update_avatar', (newPhoto)=>{
      this.updatingAvatar(newPhoto)
          .then(()=>{
            console.log('Avatar updating');
            bus.emit('photo_uploaded');
          })
          .catch((err)=>{
            console.log(err);
          });
    });
  }
};
