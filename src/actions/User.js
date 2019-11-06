export function logout() {
  return {
    type: 'LOGGED_OUT',
  };
}

// тут должен быть action-функция, которая попытается залогиниться,
// но пока так
export function login(login='user', pswd='123456') {
  return function(dispatch) {
    console.log(
        'thunk который печатает и затем диспатчит дальше' +
        ' через секунду'
    );

    // тут должен быть какой-нибудь fetch или обращение
    // к сервису через шинуо

    setTimeout(() => {
      dispatch({
        type: 'LOGGED_IN',
        id: 1,
        login: login,
        password: pswd,
      });
    }, 1000);
  };
}
