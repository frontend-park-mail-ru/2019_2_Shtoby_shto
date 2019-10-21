import Ajax from './Ajax';

class UserService {
  login(info) {
    return new Promise(function(resolve, reject) {
      return Ajax.doPost('/login', info)
          .then((res) => {
            if (res.status !== 200) {
              reject(res.status);
            } else {
              resolve();
            }
          });
    });
  }

  register(info) {
    return new Promise(function(resolve, reject) {
      return Ajax.doPost('/register', info)
          .then((res) => {
            if (res.status !== 200) {
              reject(res.status);
            } else {
              resolve();
            }
          });
    });
  }

  fetchUser() {
    return new Promise(function(resolve, reject) {
      return Ajax.doGet('/user')
          .then((res) => {
            if (res.status !== 200) {
              reject(res.status);
            }
            return res;
          })
          .then((res) => res.json())
          .then((res) => resolve(res));
    });
  }
};

export default new UserService();
