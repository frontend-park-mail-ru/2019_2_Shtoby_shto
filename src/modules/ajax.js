const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
                localApiAddr;

/**
 * Отправляет запрос авторизации
 * @param  {string} path
 * @param {Object} body
 * @return {Promise} promise
 */
export function doPost(path = '/', body = null) {
  console.log(body);
  return fetch(apiAddr + path, {
    method: 'POST',
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(body),
  })
      .then((res) => res.json())
      .then((response) => {
        console.log('Успех:', JSON.stringify(response));
        return response;
      })
      .catch((error) => alert(error.message));
}

/**
 * Отправляет запрос авторизации
 * @param  {string} path
 * @param {Object} body
 * @return {Promise} promise
 */
export function doGet(path = '/') {
  return fetch(apiAddr + path, {
    method: 'GET',
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
  })
      .then((response) => response.json())
      .then((response) => {
        console.log('Ответ такой:', JSON.stringify(response));
        return response;
      })
      .catch((error) => null);
}

/**
 * Отправляет запрос авторизации
 * @param  {string} path
 * @param {Object} body
 * @return {Promise} promise
 */
export function doPut(path = '/', body = null) {
  console.log(body);
  return fetch(apiAddr + path, {
    method: 'PUT',
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(body),
  })
      .then((res) => res.json())
      .then((response) => {
        console.log('Ответ такой:', JSON.stringify(response));
        return response;
      })
      .catch((error) => alert(error.message));
}
