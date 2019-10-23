const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;


function attachHeaders(method, body) {
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
}

function ajax(method, path, body) {
  console.log('apiAddr', apiAddr);
  console.log('posting ajax', body);
  return fetch(apiAddr + path, attachHeaders(method, body));
}

class Ajax {
  doPost(path, body) {
    return ajax('POST', path, body);
  }

  doGet(path, body) {
    return ajax('GET', path, body);
  }
};

export default new Ajax();
