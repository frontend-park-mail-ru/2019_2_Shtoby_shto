import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';

import CardContainer from './CardContainer';
import CardPlus from './CardPlus';

import TransformingInput from '../../../components/TransformingInput';

import * as groupActions from '../../../actions/Group';
import * as cardActions from '../../../actions/Card';

export default class GroupController extends DNDComponent {
  constructor(dispatch, group) {
    super({classes: ['card__group']});
    this.makeDraggable();

    this.group = group;
    this.dispatch = dispatch;

    this.addChild(new Component({classes: ['group__header']})
        .addChild(new TransformingInput(
            new Component({
              content: `${group.name}`,
              classes: ['group__name'],
            }),
            {
              content: `${group.name}`,
              classes: ['group__name'],
            }, 'reset')
            .setOnChange((text) => {
              if (text && group.name !== text) {
                dispatch(groupActions.rename(text, group.boardId, group.id));
              }
            }).useDblclick()
        ));

    this.addChild(new CardContainer(dispatch, ...group.cards));
    this.addChild(new Component({
      classes: ['card__container'],
    }).addChild(new CardPlus().setOnBlur((text) => {
      if (text) {
        dispatch(cardActions.createCard(text, group.id));
      }
    })));
  }

  del() {
    this.dispatch(groupActions.deleteGroup(this.group.id));
  }

  placeHere(whatToPlace) {
    if (this.group !== whatToPlace.group) {
      this.dispatch(groupActions.swapGroup(
          whatToPlace.group.id, this.group.id
      ));
    }
  }
}
