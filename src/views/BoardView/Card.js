// import Component from '../../modules/Component';
import DNDComponent from '../../modules/DNDComponent';

export default class Card extends DNDComponent {
  constructor(card) {
    super({
      classes: ['board__card'],
      content: card.caption,
    });

    this.makeDraggable();
  }
}
