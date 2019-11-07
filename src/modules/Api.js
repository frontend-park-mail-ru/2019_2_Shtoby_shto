import Ajax from './Ajax';

export default class Api {
  constructor(domain) {
    this.ajax = new Ajax(domain);
  }

  get(path) {
    return this.ajax.jsonRequest('GET', path);
  }

  post(path, body) {
    return this.ajax.jsonRequest('POST', path, body);
  }

  put(path, body) {
    return this.ajax.jsonRequest('PUT', path, body);
  }

  clearToken() {
    this.ajax.clearToken();
  }
}
