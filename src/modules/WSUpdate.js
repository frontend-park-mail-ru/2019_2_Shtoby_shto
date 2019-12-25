import apiUrl from '../apis/shtobyApiAddr';

const defaultUrl = `${apiUrl}`;

import * as board from '../actions/Board';

function makeWsUri(url) {
  let uri = window.location.protocol === 'https:'
      ? 'wss:'
      : 'ws:';

  const retUri = `${uri}//${url.replace(/^http:\/\//, '')}/cards/ws`;
  console.log(retUri);
  return retUri;
}

class WSBoardUpdate {
  setup(store, url = defaultUrl) {
    this.store = store;
    this.uri = makeWsUri(url);
    this.callbacks = [];
  }

  connect(userId) {
    this.ws = new WebSocket(this.uri);

    this.ws.onopen = () => {
      setTimeout(() => {

        this.ws.send(JSON.stringify({
          'user_id': userId,
        }));
        console.log('Connected');
      }, 100);

      this.connected = true;
    };
    this.ws.onmessage = this.updateCallback.bind(this);
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = undefined;
    }
    this.connected = false;
  }

  change(userId, boardId) {
    if (this.connected) {
      console.log('sending info', userId, boardId);
      this.ws.send(JSON.stringify({
        'user_id': userId,
        'board_id': boardId,
      }));
    }
  }

  updateCallback(evt){
    const BoardId = JSON.parse(evt.data)['board_id'];
    this.store.dispatch(board.getBoard(BoardId));
  }
}

export default new WSBoardUpdate();

