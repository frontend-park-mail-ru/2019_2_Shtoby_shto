import Component from '../../modules/Component';
import DNDComponent from '../../modules/DNDComponent';
import CardContainer from './CardContainer';
import CardPlus from './CardPlus';

import TransformingInput from '../../components/TransformingInput';

import * as groupActions from '../../actions/Group';
import * as cardActions from '../../actions/Card';

export default class GroupController extends DNDComponent {
  constructor(dispatch, group) {
    super({classes: ['card__group']});

    this.addChild(new TransformingInput(
        new Component({
          content: `${group.name}`,
          classes: ['group__header', 'group__name'],
        }),
        {
          content: `${group.name}`,
          classes: ['group__header', 'group__name'],
        })
        .setOnBlur((text) => {
          dispatch(groupActions.rename(text, group['board_id'], group.id));
        })
        .useDblclick()
    );

    this.addChild(new CardContainer(group.board_id, dispatch, ...group.cards));
    this.addChild(new Component({
      classes: ['board__card__container'],
    }).addChild(new CardPlus().setOnBlur((text) => {
      if (text) {
        dispatch(cardActions.createCard(text, group.id));
      }
    })));

    this.group = group;
    this.dispatch = dispatch;

    this.makeDraggable();
  }

  del() {
    this.dispatch(groupActions.deleteGroup(this.group.id));
  }
}
