import Card from './Card';

class CardAdder extends Card {
  constructor(parentGroup) {
    super(parentGroup, 'добавить карточку');

    this.el.classList.add('board__card__adder', 'board__card');
    this.el.onclick = this.newCard.bind(this);
  }

  addCard(c) {
    const newCard = new Card(this.parentGroup);
    newCard.fill(c);
    newCard.attachBefore(this.parentEl, this.el);
  }

  newCard() {
    const newCard = new Card(this.parentGroup);
    newCard.create('bass', 10);
    newCard.attachBefore(this.parentEl, this.el);
  }
}

export default CardAdder;
