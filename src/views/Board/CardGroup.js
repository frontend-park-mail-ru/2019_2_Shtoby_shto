import bus from '../../modules/bus';
import IdGenerator from '../../modules/IdGenerator';
import CardAdder from './CardAdder';

class CardGroup {
  constructor(parentBoard) {
    const newGroup = document.createElement('div');
    newGroup.setAttribute('class', 'board__group');

    const groupName = document.createElement('div');
    groupName.setAttribute('class', 'board__group__name');

    const header = document.createElement('div');
    header.classList.add('group__header');

    header.appendChild(groupName);
    newGroup.appendChild(header);
    this.header = header;

    this.nameEl = groupName;
    // newGroup.appendChild(groupName);

    this.el = newGroup;
    this.parentBoard = parentBoard;

    const inputField = document.createElement('input');
    this.input = inputField;
  }

  toInput(onChange, onBlur) {
    this.header.removeChild(this.nameEl);
    this.header.prepend(this.input);

    this.input.onchange = onChange;
    this.input.onblur = onBlur;

    // inputField.onchange = onChange;
    // inputField.onblur = onBlur;

    this.input.focus();
    // inputField.focus();
  }

  removeInput() {
    this.input.onchange = null;
    this.input.onblur = null;
    this.header.removeChild(this.input);
    this.header.prepend(this.nameEl);
  }

  create(name, boardId) {
    const uid = IdGenerator.getId();

    bus.emit('new_group', {
      uid: uid,
      name: name,
      boardId: boardId,
    });

    this.filler = (groupRes) => {
      if (groupRes.uid === uid) {
        bus.off('got_group', this.filler);
        this.fill(groupRes.group);
      }
    };

    bus.on('got_group', this.filler);
  }

  get(id) {
    const uid = IdGenerator.getId();

    bus.emit('get_group', {
      uid: uid,
      id: id,
    });

    this.filler = (groupRes) => {
      if (groupRes.uid === uid) {
        bus.off('got_group', this.filler);
        this.fill(groupRes.group);
      }
    };

    bus.on('got_group', this.filler);
  }

  attach(parentEl) {
    this.parentEl = parentEl;
    this.parentEl.appendChild(this.el);
  }

  attachBefore(parentEl, adder) {
    this.parentEl = parentEl;
    this.parentEl.insertBefore(this.el, adder);
  }

  fill(group) {
    this.group = group;

    if (!this.group.cards) {
      this.group.cards = [];
    }

    this.render();
  }

  render() {
    // this.nameEl.innerText = this.group.name;
    this.nameEl.textContent = this.group.name;

    const cardAdder = new CardAdder(this);
    cardAdder.attach(this.el);

    this.adder = cardAdder;

    this.group.cards.forEach((c) => {
      this.adder.addCard(c);
    });
  }

  rename(name) {
    // this.input.textContent = this.nameEl.innerText;
    console.log('try_rename');

    const renamer = (group) => {
      console.log(group);
      if (group.id === this.group.id) {
        // this.fill(group);
        this.nameEl.innerText = group.name;

        bus.off('group_changed', renamer);
      }
    };

    bus.on('group_changed', renamer);
    bus.emit('rename_group', {
      group: this.group,
      newName: name,
    });
  }

  addRenameCapabilities() {
    this.nameEl.ondblclick = () => {
      this.input.value = this.group.name;
      this.toInput(
          (e) => {
            this.rename(e.target.value);
            this.removeInput();
          },
          () => this.removeInput()
      );
    };
  }

  delete() {
    const deleter = (id) => {
      if (this.group.id === id) {
        this.parentEl.removeChild(this.el);
        bus.off('deleted_group', deleter);
      }
    };

    bus.on('deleted_group', deleter);

    bus.emit('delete_group', this.group.id);
  }

  addDeleter() {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('group__deleter');
    deleteButton.innerText = 'x';

    deleteButton.onclick = this.delete.bind(this);
    this.header.prepend(deleteButton);
  }
};

export default CardGroup;
