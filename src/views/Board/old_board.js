// require("BaseView.js'");
// import bus from '../../modules/bus.js';
import {doPost} from '../../modules/ajax';
const template = require('./board.pug');
import {DragManager} from './DragManag.js';
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

  DragManager.onDragCancel = function(dragObject) {
    console.log('drag cancel');
    dragObject.avatar.rollback();
  };

  DragManager.onDragEnd = function(dragObject, dropElem) {
    console.log('drag end');
    dragObject.elem.style.display = 'none';
    dropElem.classList.add('computer-smile');
    setTimeout(function() {
      dropElem.classList.remove('computer-smile');
    }, 200);
  };
}
