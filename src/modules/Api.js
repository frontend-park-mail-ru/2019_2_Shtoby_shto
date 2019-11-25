import Ajax from './Ajax';

export default class Api {
  constructor(domain) {
    this.ajax = new Ajax(domain);
  }

  get(path) {
    return this.ajax.jsonRequest('GET', path);
  }

  download(path) {
    return this.ajax.request('GET', path);
  }

  upload(path, file) {
    return this.ajax.request('POST', path, file, true);
  }

  post(path, body) {
    return this.ajax.jsonRequest('POST', path, body);
  }

  put(path, body) {
    return this.ajax.jsonRequest('PUT', path, body);
  }

  del(path) {
    return this.ajax.request('DELETE', path);
  }

  clearToken() {
    this.ajax.clearToken();
  }
}
