import Api from '../modules/Api';

const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

export default class BoardApi extends Api {
  constructor() {
    super(apiAddr);
  }

  fetchBoards(userId) {
    return this.get(`/board/user/${userId}`);
  }

  createBoard(name) {
    return this.post(`/board`, {name: name});
  }
}
