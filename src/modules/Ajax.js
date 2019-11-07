const tokenStorage = {
  token: undefined,
};

function attachHeaders(method, body) {
  const headers = new Headers();

  if (tokenStorage.token) {
    console.log('appending token', tokenStorage.token);
    headers.set('X-Csrf-Token', tokenStorage.token);
  }

  const request = {
    method: method,
    credentials: 'include',
  };

  request.headers = headers;
  if (body) request.body = JSON.stringify(body);

  return request;
}

function clearToken() {
  if (tokenStorage.token) {
    console.log('clearing token');
    tokenStorage.token = undefined;
  }
}

class Ajax {
  constructor(url) {
    this.apiAddr = url;
  }

  clearToken() {
    clearToken();
    // tokenStorage.token = undefined;
  }

  request(method, path, body) {
    return new Promise((resolve, reject) => {
      fetch(this.apiAddr + path, attachHeaders(method, body))
          .then((res) => {
            if (res.status !== 200) {
              reject(Error('status is not 200'));
            } else {
              if (res.headers.has('X-Csrf-Token')) {
                console.log('got token:', res.headers.get('X-Csrf-Token'));
                if (!tokenStorage.token) {
                  tokenStorage.token = res.headers.get('X-Csrf-Token');
                }
              }

              resolve(res);
            }
          })
          .catch((err) => reject(err));
    });
  }

  jsonRequest(method, path, body) {
    return this.request(method, path, body)
        .then((res) => res.json());
  }
}

export default Ajax;
