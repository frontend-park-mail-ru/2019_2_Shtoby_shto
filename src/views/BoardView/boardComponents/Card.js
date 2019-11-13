import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';
// import dnd from '../../../modules/dnd';

import * as cards from '../../../actions/Card';

export default class Card extends DNDComponent {
  constructor(card, dispatch) {
    super({classes: ['board__card']});

    this.addChild(new TransformingInput(
        new Component({
          classes: ['card__header'],
          content: card.caption,
        }),
        {
          classes: ['card__header'],
          content: card.caption,
        },
        'reset').useDblclick()
    );

    this.addChild(new TransformingInput(
        new Component({
          classes: ['card__content'],
          content: 'текст карточки',
        }),
        {
          classes: ['card__content'],
          content: 'текст карточки',
        },
        'reset').useDblclick()
    );

    // super(new Component({
    //   classes: ['board__card'],
    //   content: card.caption,
    // }),
    // {
    //   classes: ['board__card'],
    //   content: card.caption,
    // });

    this.id = card.id;

    // this.useDblclick();
    // dnd(this);

    this.makeDraggable();
    this.dispatch = dispatch;
  }

  del() {
    this.dispatch(cards.deleteCard(this.id));
  }
}
