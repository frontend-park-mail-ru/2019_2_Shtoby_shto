import Component from '../../../modules/Component';
import TransformingInput from '../../../components/TransformingInput';
// import dnd from '../../../modules/dnd';

import * as cards from '../../../actions/Card';
// import * as uiActions from '../../../actions/UI';

import UserDisplayer from './UserDisplayer';

export default class ExpandedCard extends Component {
  constructor(card, dispatch) {
    super({classes: ['expanded__card']});

    this.initChildren(card);

    this.dispatch = dispatch;
  }

  generateContent() {
    return `<cheader></cheader><textarea></textarea><comments></comments>`;
  }

  getMounts() {
    return {
      header: this.element.getElementsByTagName('cheader')[0],
      text: this.element.getElementsByTagName('textarea')[0],
      comments: this.element.getElementsByTagName('comments')[0],
    };
  }

  initChildren(card) {
    this.addChild(new TransformingInput(
        new Component({
          classes: ['expanded__card__header'],
          content: card.caption,
        }),
        {
          classes: ['expanded__card__header'],
          content: card.caption,
        },
        'keep').useDblclick().setOnBlur((text) => {
      if (text.length && text !== card.caption) {
        this.dispatch(cards.setCaption(card.id, text));
      }
    }), 'header'
    );

    this.addChild(
        new UserDisplayer({
          classes: ['expanded__card__user__displayer'],
          avatarClasses: ['card__avatar'],
        }, ...card.users), 'text'
        // )
    );
  }

  renew(card) {
    this.initChildren(card);
  }
}
