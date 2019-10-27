import Ajax from './Ajax';

export default class UserService {
  constructor(addr) {
    this.ajax = new Ajax(addr);
  }

  login(info) {
    return this.ajax.request('POST', '/login', info);
  }

  register(info) {
    return this.ajax.request('POST', '/registration', info);
  }

  fetchUser() {
    return this.ajax.jsonRequest('GET', '/users');
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

    bus.on('fetch_user', () => {
      this.fetchUser()
          .then((user) => {
            bus.emit('got_user', user);
          })
          .catch((err) => {});
    });
  }
};
