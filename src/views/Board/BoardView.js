import BaseView from '../../modules/BaseView';
// import {DragManager} from './DragManag.js';
// import bus from '../../modules/bus';
import BoardStorage from '../../storage/board/BoardStorage';

import getElementsGetter from '../../modules/utils/elementGetter';

const template = require('./board.pug');
import './board.css';

export default class BoardView extends BaseView {
  constructor(el, router) {
    super(el, router);

    this.getButtonsArr = getElementsGetter('board__button');
    this.getBoardsArr = getElementsGetter('board__board');
    this.getCardsArr = getElementsGetter('board__card');

    this.selectedBoard = 1;

    BoardStorage.dispatch({type: 'new_board', board_name: 'board1'});
    BoardStorage.dispatch({type: 'new_board', board_name: 'board2'});
    BoardStorage.dispatch({
      type: 'new_card',
      board_name: 'board1',
      card_caption: 'card1',
    });

    BoardStorage.dispatch({
      type: 'new_task',
      board_name: 'board1',
      card_caption: 'card1',
      task_id: 1,
      task_text: 'make everythin cool',
    });

    console.log(BoardStorage.getState());
  }

  render() {
    this.el.innerHTML = template();

    this.addTabOpeners();
    this.addModalOpeners();
    this.selectDefaultBoard();
  }

  selectDefaultBoard() {
    this.openBoard(this.selectedBoard);
  }

  addTabOpeners() {
    const buttons = this.getButtonsArr();

    buttons.forEach((button, i) => {
      button.addEventListener('click', (e) => {
        this.openBoard(i+1);
      });
    });
  }

  addModalOpeners() {
    const modal = document.getElementsByClassName('board__modal')[0];
    const close = document.getElementsByClassName('board__modal__close')[0];
    const cards = this.getCardsArr();

    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        modal.style.display = 'block';
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  }

  openBoard(id) {
    this.deselectButtons();
    this.hideBoards();

    document.getElementById(`board${id}`).style.display = 'block';
    document.getElementById(`button${id}`).className += ' active';

    this.selectedBoard = id;
  }

  deselectButtons() {
    this.getButtonsArr().forEach((button) => {
      button.className = button.className.replace(' active', '');
    });
  }

  hideBoards() {
    this.getBoardsArr().forEach((board) => {
      board.style.display = 'none';
    });
  }
}
