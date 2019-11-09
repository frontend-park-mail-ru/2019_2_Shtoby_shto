import Component from '../../../modules/Component';
// import DNDComponent from '../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';
import dnd from '../../../modules/dnd';

import * as cards from '../../../actions/Card';

export default class Card extends TransformingInput {
  constructor(card, dispatch) {
    super(new Component({
      classes: ['board__card'],
      content: card.caption,
    }),
    {
      classes: ['board__card'],
      content: card.caption,
    });

    this.id = card.id;

    this.useDblclick();
    dnd(this);

    this.makeDraggable();
    this.dispatch = dispatch;
  }

  del() {
    this.dispatch(cards.deleteCard(this.id));
  }
}
