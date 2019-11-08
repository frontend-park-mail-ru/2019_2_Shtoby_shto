// require("BaseView.js'");
// import bus from '../../modules/bus.js';
import {doPost} from '../../modules/ajax';
const template = require('./board.pug');

/**
 * Генерирует Канбан-доску
 */
export function createBoard() {
  const html = template();
  const application = document.getElementById('application');
  application.innerHTML = html;
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    doPost('/logout', {})
        .then(() => {
          location.href='#/';
        });
  });
}
