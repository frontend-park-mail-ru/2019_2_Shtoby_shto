import bus from '../../modules/bus';
import BoardComponent from './BoardComponent';

export default class BoardTabs {
  constructor(parent, el, boardsEl, modal) {
    this.parent = parent;
    this.el = el;
    this.boardsEl = boardsEl;

    this.modal = modal;

    this.plus = document.createElement('button');
    this.plus.innerText = '+';
    this.plus.setAttribute('class', 'board_button_plus');
    this.plus.onclick = this.createTab.bind(this);

    el.appendChild(this.plus);

    this.boards = [];

    bus.on('got_board_ids', (boards) => {
      this.parent.rendered = true;
      boards.forEach((board) => {
        const newTab = document.createElement('div');

        this.el.insertBefore(newTab, this.plus);

        const boardComponent = new BoardComponent(
            this, newTab, this.boardsEl, this.modal
        );
        boardComponent.get(board.id);

        this.boards.push(boardComponent);
      });
    });
  }

  createTab() {
    const newTab = document.createElement('div');
    this.el.insertBefore(newTab, this.plus);
    const newBoard = new BoardComponent(
        this, newTab, this.boardsEl, this.modal
    );
    newBoard.waitInput();

    this.appendLoadingTab(newBoard);
  }

  appendLoadingTab(tab) {
    this.boards.push(tab);
  }

  remove(toRemove) {
    this.boards.forEach((board, index) => {
      if (board == toRemove) {
        this.el.removeChild(board.el);
        if (board.boardEl) {
          this.boardsEl.removeChild(board.boardEl);
        }
        this.boards.splice(index);
      }
    });
  }

  deselectButtons() {
    this.boards.forEach((b) => b.deselect());
  }
}
