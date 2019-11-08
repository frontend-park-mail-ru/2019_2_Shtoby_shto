import Component from '../../modules/Component';
import Card from './Card';

import * as cardActions from '../../actions/Card';

export default class CardContainer extends Component {
  constructor(boardId, dispatch, ...cards) {
    super({classes: ['card__container']});

    cards.forEach((c) => {
      this.addChild(
          new Component({
            classes: ['board__card__container'],
          })
              .addChild(new Card(c, dispatch).setOnBlur((text) => {
                dispatch(cardActions.setCaption(
                    c.id,
                    text,
                    c.priority,
                    boardId,
                    c.card_user_id,
                    c.card_group_id,
                ));
              })));
    });
  }
}
