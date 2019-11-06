const minPassLength = 6;
const maxPassLength = 20;

/**
 * Проверяет коректность ника
 * @param {String} nickname
 * @return {Object.<boolean, error>} validate
 */
export function checkName(nickname = '') {
  if (nickname.length < 3) {
    return {status: false, err: 'Имя минимум 3 символа!'};
  }
  if (nickname.length > 20) {
    return {status: false, err: 'Имя максимум 20 символов!'};
  }
  return {status: true, err: ''};
}

/**
 * Проверяет коректность почты
 * @param {String} email
 * @return {Object.<boolean, error>} validate
 */
export function checkEmail(email = '') {
  const regex = new RegExp(`([a-z0-9_\\\\-]+\\.)*[a-z0-9_\\\\-]` +
      `+@([a-z0-9][a-z0-9\\\\-]*[a-z0-9]\\.)+[a-z]{2,4}`);
  if (email.match(regex)) return {status: true, err: ''};
  else return {status: false, err: 'Некорректная почта!'};
}

/**
 * Проверяет коректность пароля
 * @param {String} password1 Пароль
 * @param {String} password2 Подтверждение пароля
 * @return {Object.<boolean, error>} validate
 */
export function checkPassword(password1, password2) {
  if (password1 !== password2) {
    return {
      status: false,
      err: 'Пароли не совпадают!',
    };
  }
  if (password1.length < minPassLength) {
    return {
      status: false,
      err: 'Слишком короткий пароль!',
    };
  }
  if (password1.length > maxPassLength) {
    return {
      status: false,
      err: 'Слишком длинный пароль!',
    };
  }
  return {status: true, err: ''};
}
