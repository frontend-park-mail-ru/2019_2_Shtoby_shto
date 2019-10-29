import bus from '../../modules/bus';
import IdGenerator from '../../modules/IdGenerator';

import CardGroupAdder from './CardGroupAdder';


export default class BoardComponent {
  constructor(parent, el, boardsEl, modal) {
    this.parent = parent;
    this.el = el;
    this.boardsEl = boardsEl;
    this.modal = modal;
  }

  waitInput() {
    this.transform('input');
    this.el.focus();

    this.el.addEventListener('change', (e) => {
      e.target.onblur = null;
      e.target.onchange = null;

      this.create(e.target.value);
    });

    this.el.onblur = function() {
      this.parent.remove(this);
    }.bind(this);
  }

  create(name) {
    const uid = IdGenerator.getId();

    bus.emit('new_board', {
      uid: uid,
      name: name,
    });

    this.filler = (boardRes) => {
      if (boardRes.uid === uid) {
        bus.off('got_board', this.filler);
        this.fill(boardRes.board);
      }
    };

    bus.on('got_board', this.filler);

    this.transform('creating', name);
  }

  get(id) {
    const uid = IdGenerator.getId();

    bus.emit('get_board', {
      uid: uid,
      id: id,
    });

    this.filler = (boardRes) => {
      if (boardRes.uid === uid) {
        bus.off('got_board', this.filler);
        this.fill(boardRes.board);
      }
    };

    bus.on('got_board', this.filler);

    this.transform('loading');
  }

  transform(type, name) {
    let newEl = null;
    switch (type) {
      case 'input':
        newEl = document.createElement('input');
        break;
      case 'loading':
        newEl = document.createElement('div');
        newEl.textContent = '/';
        break;
      case 'creating':
        newEl = document.createElement('div');
        newEl.textContent = `...${name}`;
        break;
      case 'done':
        newEl = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = this.board.name;
        const tabCloser = document.createElement('span');
        tabCloser.textContent = 'x';
        tabCloser.classList.add('tab__closer');
        this.button = button;
        tabCloser.onclick = this.delete.bind(this);
        // this.button.onclick = this.delete();

        newEl.appendChild(tabCloser);
        newEl.appendChild(button);
    }

    newEl.className = 'content';
    this.el.replaceWith(newEl);
    this.el = newEl;
  }

  fill(board) {
    this.board = board;

    if (!this.board.groups) {
      this.board.groups = [];
    }

    this.transform('done');
    this.button.onclick = this.select.bind(this);
    this.renderBoard();
  }

  delete() {
    console.log('trying to delete');
    const deleter = (id) => {
      if (this.board.id === id) {
        this.parent.el.removeChild(this.el);
        bus.off('deleted_board', deleter);
      }
    };

    bus.on('deleted_board', deleter);
    bus.emit('delete_board', this.board.id);
  }

  renderBoard() {
    const boardDiv = document.createElement('div');
    boardDiv.setAttribute('class', 'board__board');
    boardDiv.style.display = 'none';

    this.boardEl = boardDiv;
    this.boardsEl.appendChild(this.boardEl);

    const groupAdder = new CardGroupAdder(this);
    groupAdder.attach(this.boardEl);

    this.board.card_groups.forEach((group) => {
      groupAdder.addGroup(group);
      // group.render();
    });
  }

  appendTask(text) {
    const newLi = document.createElement('li');
    newLi.textContent = text;
    this.modal.tasks.appendChild(newLi);
  }

  renderModal(card) {
    this.modal.modal.style.display = 'block';
    this.modal.name.textContent = card.caption;
    this.modal.tasks.innerText = '';

    card.tasks.forEach((t) => {
      this.appendTask(t.text);
    });
  }

  hideModal() {
  }

  openModal(card) {
    this.renderModal(card.card);

    this.modal.adder.onclick = () => {
      this.modal.input.style.display = 'block';
      this.modal.input.focus();
    };

    this.modal.input.onchange = (e) => {
      card.addTask(e.target.value);
      this.appendTask(e.target.value);
      this.modal.input.style.display = 'none';
      this.modal.adder.style.display = 'block';
      // this.modal.input.onchange = null;
      // this.modal.input.onblur = null;
      this.modal.input.value = '';
    };

    this.modal.input.onblur = () => {
      this.modal.input.style.display = 'none';
      this.modal.adder.style.display = 'block';
    };
  }
  // openModal(cardG, cardCap) {
  //   this.modal.modal.style.display = 'block';
  //   this.board.cards.forEach((c) => {
  //     if (c.group === cardG && c.caption === cardCap) {
  //       this.modal.name.innerText = c.caption;
  //       this.modal.content.innerHTML = '';
  //       c.tasks.forEach((t) => {
  //         const newLi = document.createElement('li');
  //         newLi.innerText = t.text;
  //         this.modal.content.appendChild(newLi);
  //       });
  //     }
  //   });
  // }

  hide() {
    this.boardEl.style.display = 'none';
  }

  show() {
    this.boardEl.style.display = 'flex';
  }

  deselect() {
    this.el.className = this.el.className.replace(' active', '');
    this.hide();
  }

  select() {
    this.parent.deselectButtons();
    this.el.className += ' active';
    this.show();
  }
}
