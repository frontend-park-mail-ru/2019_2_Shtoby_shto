import {checkEmail} from '../../modules/validation.js';
import {checkPassword} from '../../modules/validation.js';
import {checkName} from '../../modules/validation.js';
import {doPost} from '../../modules/ajax.js';
import {createBoard} from '../Board/board.js';

import './login.css';
const template = require('./login.pug');

/**
 * Генерирует страницу регистрации
 */
export function reg() {
  const application = document.getElementById('application');
  application.innerHTML = template();

  const formIn = document.getElementsByTagName('form')[0];
  const In = (e) => login(e, formIn, false);
  formIn.addEventListener('submit', In);

  const formUp = document.getElementsByTagName('form')[1];
  const Up = (e) => login(e, formUp, true);
  formUp.addEventListener('submit', Up);

  // украшение
  document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
}

function login(e, form, isReg) {
  e.preventDefault();
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  let area = document.getElementsByClassName('errorArea').item(0);

  let body = {'login': email, 'password': password};
  let path = '/login';
  let name = 'user';
  if (isReg) {
    name = form.elements['name'].value;
    body += {'name': name};
    path = '/registration';
    area = document.getElementsByClassName('errorArea').item(1);
  }
  const check = checkEmail(email).status && checkPassword(password, password).status && checkName(name).status;
  if (check) {
    doPost(path, body)
        .then((response) => {
          if (response.status !== 200) {
            area.innerText = response.message;
          } else {
            createBoard();
          }
        }).catch(() => {
          area.innerText = 'Не удалось связаться с сервером!';
        });
  } else {
    area.innerText = [checkEmail(email).err, checkPassword(password, password).err, checkName(name).err].join(' ');
  }
}
