import bus from '../../modules/bus';
import IdGenerator from '../../modules/IdGenerator';

class Card {
  constructor(parentGroup, name) {
    this.parentGroup = parentGroup;
    const newCard = document.createElement('div');
    newCard.classList.add('board__card');
    const nameDiv = document.createElement('div');

    if (name) {
      nameDiv.innerText = name;
    }

    newCard.appendChild(nameDiv);

    this.el = newCard;
    this.nameDiv = nameDiv;
  }

  attach(parentEl) {
    this.parentEl = parentEl;
    this.parentEl.appendChild(this.el);
  }

  attachBefore(parentEl, adder) {
    this.parentEl = parentEl;
    this.parentEl.insertBefore(this.el, adder);
  }

  create(caption, priority) {
    const uid = IdGenerator.getId();

    const body = {
      uid: uid,
      caption: caption,
      priority: priority,
      groupId: this.parentGroup.group.id,
      boardId: this.parentGroup.parentBoard.board.id,
    };

    bus.emit('new_card', body);

    this.filler = (cardRes) => {
      if (cardRes.uid === uid) {
        bus.off('got_card', this.filler);
        this.fill(cardRes.card);
      }
    };

    bus.on('got_card', this.filler);
  }

  addDeleter() {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('card__deleter');
    deleteButton.innerText = 'x';

    deleteButton.onclick = this.delete.bind(this);
    this.el.insertBefore(deleteButton, this.nameDiv);
    // this.el.appendChild(deleteButton);
  }

  delete() {
    const deleter = (id) => {
      if (this.card.id === id) {
        this.parentEl.removeChild(this.el);
        bus.off('deleted_card', deleter);
      }
    };

    bus.on('deleted_card', deleter);

    bus.emit('delete_card', this.card.id);
  }

  get(id) {
    const uid = IdGenerator.getId();

    bus.emit('get_card', {
      uid: uid,
      id: id,
    });

    this.filler = (cardRes) => {
      if (cardRes.uid === uid) {
        bus.off('got_card', this.filler);
        this.fill(cardRes.card);
      }
    };

    bus.on('got_card', this.filler);
  }

  fill(card) {
    this.card = card;
    if (!this.card.tasks) {
      this.card.tasks = [];
    }

    this.render();
  }

  render() {
    this.addDeleter();
    this.el.onclick = this.openModal.bind(this);
    this.nameDiv.innerText = this.card.caption;
  }

  openModal() {
    this.parentGroup.parentBoard.openModal(this);
  }

  addTask(text) {
    console.log('addtask', text);

    const adder = (task) => {
      if (task.card_id === this.card.id) {
        bus.off('got_task', adder);
        this.card.tasks.push(task);
      }
    };

    bus.emit('new_task', {
      text: text,
      cardId: this.card.id,
    });

    bus.on('got_task', adder);
  }
  // attachModal() {

  // }
}

export default Card;
