export default class Board {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard(offset) {
    this.cards.splice(offset);
  }
}
