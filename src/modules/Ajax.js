const tokenStorage = {
  token: undefined,
};

function attachHeaders(method, body) {
  const headers = new Headers();

  if (tokenStorage.token) {
    headers.set('X-Csrf-Token', tokenStorage.token);
  }
  // headers.set('Access-Control-Allow-Headers', 'X-Csrf-Token');

  switch (method) {
    case 'POST':
      headers.set('Content-Type', 'application/json');

      return {
        method: method,
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: headers,
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(body),
      };
    default:
      return {
        method: method,
        credentials: 'include',
        body: JSON.stringify(body),
        headers: headers,
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
              // console.log(res.headers['x-csrf-token']);

              // console.log('headers for', path);
              if (res.headers.has('X-Csrf-Token')) {
                tokenStorage.token = res.headers.get('X-Csrf-Token');
              }

              console.log(tokenStorage);
              // console.log(res.headers.get('X-Csrf-Token'));

              // res.headers.forEach((h) => {
              //   console.log('header', h);
              // });

              // if (res.headers['X-CSRF-TOKEN']) {
              //   console.log('theres a token in here',
              //       res.headers['X-CSRF-TOKEN'] );
              //   tokenStorage.token = {
              //     'X-Csrf-Token': res.headers['X-Csrf-Token'],
              //   };
              // }
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
