function attachHeaders(method, body) {
  switch (method) {
    case 'POST':
      return {
        method: method,
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(body),
      };
    default:
      return {
        method: method,
        credentials: 'include',
      };
  }
}

class Ajax {
  constructor(url) {
    this.apiAddr = url;
  }

  request(method, path, body) {
    return new Promise((resolve, reject) => {
      fetch(this.apiAddr + path, attachHeaders(method, body))
          .then((res) => {
            if (res.status !== 200) {
              reject(Error('status is not 200'));
            } else {
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
