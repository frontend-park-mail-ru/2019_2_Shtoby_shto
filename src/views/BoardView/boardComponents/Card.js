import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';
// import dnd from '../../../modules/dnd';

import * as cards from '../../../actions/Card';
import * as uiActions from '../../../actions/UI';

import UserDisplayer from './UserDisplayer';

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
        'reset').useDblclick().setOnBlur((text) => {
      if (text.length && text !== card.caption) {
        dispatch(cards.setCaption(card.id, text));
      }
    })
    );

    this.addChild(
        new UserDisplayer({
          classes: ['card__user__displayer'],
          avatarClasses: ['card__avatar'],
        }, ...card.users)
        // )
    );

    this.id = card.id;

    this.makeDraggable();
    this.dispatch = dispatch;

    this.element.onclick = (e) => {
      this.dispatch(uiActions.showCard(card));
    };
  }

  del() {
    this.dispatch(cards.deleteCard(this.id));
  }
}
