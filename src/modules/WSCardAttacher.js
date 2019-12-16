import apiUrl from '../apis/shtobyApiAddr';
const defaultUrl = `${apiUrl}`;

function makeWsUri(url) {
  let uri = window.location.protocol === 'https:'
    ? 'wss:'
    : 'ws:';

  const retUri = `${uri}//${url.replace(/^http:\/\//, '')}/cards/ws`;
  console.log(retUri);
  return retUri;
}

class WSCardAttacher {
  setup(store, url=defaultUrl) {
    this.store = store;
    this.uri = makeWsUri(url);
  }
  // constructor(store, url=defaultUrl) {
  //   this.uri = makeWsUri(url);
  //   this.store = store;
  // }

  connect(userId) {
    this.ws = new WebSocket(this.uri);

    this.ws.onopen = () => {
      setTimeout(() => {

        this.ws.send(JSON.stringify({
          "user_id": userId,
        }));
        console.log('Connected')
      }, 100)

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

  attachToCard(userId, cardId) {
    if (this.connected) {
      console.log('sending info', userId, cardId);
      this.ws.send(JSON.stringify({
        "user_id": userId,
        "card_id": cardId,
      }));
    }
  }

  msgcallback(evt) {
    console.log(evt.data);
  }
}

export default new WSCardAttacher();
