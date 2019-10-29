import BaseView from '../../modules/BaseView';
import bus from '../../modules/bus';

import {DragManager} from './DragManag.js';

import BoardTabs from './BoardTabs';

const template = require('./board.pug');
import './board.css';

export default class BoardView extends BaseView {
  constructor(el, router) {
    super(el, router);

    this.el.innerHTML = template();

    this.rendered = false;

    const modal = {
      modal: document.getElementsByClassName('board__modal')[0],
      name: document.getElementsByClassName('modal__card__name')[0],
      content: document.getElementsByClassName('modal__card__content')[0],
      input: document.getElementsByClassName('modal__input')[0],
      adder: document.getElementsByClassName('modal__adder')[0],
      tasks: document.getElementsByClassName('modal__content__tasks')[0],
    };

    this.modal = modal;

    // this.tabs = new BoardTabs(
    //     this,
    //     document.getElementsByClassName('board__tabs')[0],
    //     document.getElementsByClassName('board__container')[0],
    //     modal
    // );

    document.getElementsByClassName('board__modal__close')[0]
        .addEventListener('click', () => {
          modal.modal.style.display = 'none';
        });

    window.addEventListener('click', (e) => {
      if (e.target == modal.modal) {
        modal.modal.style.display = 'none';
      }
    });

    bus.on('logged_out', () => {
      this.el.innerHTML = template();
      this.rendered = false;
    });

    this.rendered = false;
    // this.fillBoards();
  }

  fillBoards() {
    if (!this.rendered) {
      this.tabs = new BoardTabs(
          this,
          document.getElementsByClassName('board__tabs')[0],
          document.getElementsByClassName('board__container')[0],
          this.modal
      );
      console.log('trying to fill');

      const filler = (user) => {
        bus.off('got_user', filler);
        bus.emit('fetch_boards', user.id);
      };

      bus.on('got_user', filler);
      bus.emit('fetch_user');
    }
  }

  render() {
    this.fillBoards();
  }
}

DragManager.onDragCancel = function(dragObject) {
  console.log('drag cancel');
  dragObject.avatar.rollback();
};

DragManager.onDragEnd = function(dragObject, dropElem) {
  console.log('drag end');
  // dragObject.elem.style.display = 'none';
  console.log(dragObject);
  console.log(dropElem);
};
