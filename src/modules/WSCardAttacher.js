import apiUrl from '../apis/shtobyApiAddr';

const defaultUrl = `${apiUrl}`;

import * as cardActions from '../actions/Card';
import * as board from '../actions/Board';

function makeWsUri(url) {
  let uri = window.location.protocol === 'https:'
      ? 'wss:'
      : 'ws:';

  const retUri = `${uri}//${url.replace(/^http:\/\//, '')}/cards/ws`;
  console.log(retUri);
  return retUri;
}

class WSCardAttacher {
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

    this.ws.onmessage = this.msgcallback.bind(this);
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = undefined;
    }

    this.connected = false;
  }

  addCallback(fun) {
    this.callbacks.push(fun);
  }

  attachToCard(userId, cardId) {
    if (this.connected) {
      console.log('sending info', userId, cardId);
      this.ws.send(JSON.stringify({
        'user_id': userId,
        'card_id': cardId,
      }));
    }
  }

  msgcallback(evt) {
    const refreshedCardId = JSON.parse(evt.data)['card_id'];
    console.log('asfdsafdfas', evt);

    this.store.dispatch(cardActions.refreshCard(refreshedCardId));
    this.callbacks.forEach((fun) => {fun({card: refreshedCardId})});
  }
}

export default new WSCardAttacher();
