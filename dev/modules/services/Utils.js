/**
 * Разбор Url параметров запоса
 *
 * @param {}
 * @returns {Object} request запрос
 */
const Utils = {
  parseRequestUrl: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';
    console.log(url);
    const r = url.split('/');
    const request = {
      resource: null,
      id: null,
      verb: null,
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },
};

export default Utils;
