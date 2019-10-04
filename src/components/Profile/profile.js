import './profile.css';
import './profilewolf.svg';
import './userAva.png';

import {doPut, doGet} from '../../modules/ajax';
import {checkPassword, checkEmail} from '../../modules/validation';

const template = require('./profile.pug');

/**
 * Work with profile
 */
export function profile() {
  const user = {};
  const application = document.getElementById('application');
  application.innerHTML = template();

  doGet('/user')
      .then((response) => {
        // if (!response) {
        //   location.href = '#/';
        // } else {
        user['login'] = response.login;
        user['password'] = response.password;
        user['id'] = response.id;

        const username = document.getElementById('username');
        username.value = user.login;

        const password = document.getElementById('password');
        password.value = user.password;

        const button = document.getElementsByClassName('saveButton')[0];

        button.addEventListener('click', () => {
          const newName = document.getElementById('username');
          const newPassword = document.getElementById('password');

          const validEmail = checkEmail(newName.value);
          const validPassword = checkPassword(
              newPassword.value,
              newPassword.value
          );

          if (validEmail && validPassword) {
            doPut(`/user`, {'login': newName.value, 'password': newPassword.value})
                .then((response) => {
                  console.log(response);
                  if (response.status !== 200) {
                    console.log(response.message);
                    location.href = '/';
                  } else {
                    location.href = '#';
                  }
                }).catch((response) => {
                  alert(`ошибка:${response}`);
                });
          } else {
            console.log('как-то сообщить юзеру что что-то не так');
            if (!validEmail) {
              console.log('невалидный email');
            }
            if (!validPassword) {
              console.log('невалидный пароль');
            }
          }
        });
        // }
      });
}

// function img() {
//   const name = 'profilewolf.svg';
//   const imag = document.getElementById('avatar');
//   imag.setAttribute('src', `static/img/${name}`);
// }


