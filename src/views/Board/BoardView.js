import BaseView from '../../modules/BaseView';
import {DragManager} from './DragManag.js';
// import bus from '../../modules/bus';

const template = require('./board.pug');
import './board.css';

export default class BoardView extends BaseView {
  render() {
    this.el.innerHTML = template();
    this.newCard = document.getElementsByClassName('newCard')[0];
    this.newCard.addEventListener('click', this.createCard.bind(this));
  }

  createCard() {
    console.log('createCard');
  }
}

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
