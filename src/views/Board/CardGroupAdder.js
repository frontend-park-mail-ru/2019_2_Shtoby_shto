import CardGroup from './CardGroup';

class CardGroupAdder extends CardGroup {
  constructor(parentBoard) {
    super(parentBoard);

    this.nameEl.innerText = 'создать группу';
    this.nameEl.onclick = () => {
      this.input.value = '';
      this.toInput(
          (e) => {
            this.createGroup(e.target.value);
            this.removeInput();
          },
          () => {
            this.removeInput();
          }
      );
    };
  }

  appendGroup() {
    const newGroup = new CardGroup(this.parentBoard);
    newGroup.attachBefore(this.parentEl, this.el);
    newGroup.addRenameCapabilities();
    newGroup.addDeleter();

    return newGroup;
  }

  addGroup(g) {
    this.appendGroup().fill(g);
  }

  createGroup(name) {
    this.appendGroup().create(name, this.parentBoard.board.id);
  }

  getGroup(id) {
    this.appendGroup().get(id);
  }
};

export default CardGroupAdder;
