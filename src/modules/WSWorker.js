import apiUrl from '../apis/shtobyApiAddr';
const defaultUrl = `${apiUrl}`;

export default class WSCardAttacher {
  constructor(url=defaultUrl) {
    this.ws = WebSocket(url)
  }

  connect() {

  }
}