const nameRegexp = /^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/;
const emailRegexp = /^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;

const minPassLength = 6;

/**
 * Проверяет коректность ника
 * @param {String} nickname
 * @return {boolean} validate
 */
export function checkName(nickname = '') {
  return nickname.match(nameRegexp);
}

/**
 * Проверяет коректность почты
 * @param {String} email
 * @return {boolean} validate
 */
export function checkEmail(email = '') {
  return email.match(emailRegexp);
}

/**
 * Проверяет коректность пароля
 * @param {String} password Пароль
 * @return {boolean} validate
 */
export function checkPassword(password) {
  return password.length >= minPassLength;
}
