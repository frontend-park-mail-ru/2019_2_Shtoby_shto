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

  fetchBoard(id) {
    return this.get(`/board/${id}`);
  }

  createBoard(name) {
    return this.post(`/board`, {name: name});
  }

  updateBoard(id, name) {
    return this.put(`/board/${id}`, {name: name});
  }

  deleteBoard(id) {
    return this.del(`/board/${id}`);
  }

  createGroup(name, boardId) {
    return this.post('/card-group', {name: name, board_id: boardId});
  }

  renameGroup(name, boardId, id) {
    return this.put(`/card-group/${id}`, {name: name, board_id: boardId});
  }
}
