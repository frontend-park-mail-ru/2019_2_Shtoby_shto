import Api from '../modules/Api';

const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

export default class UserApi extends Api {
  constructor() {
    super(apiAddr);
  }

  login(login, password) {
    return this.post('/login', {
      login: login,
      password: password,
    });
  }

  getUser() {
    return this.get('/users');
  }
}
