import Component from '../../modules/Component';
import CardContainer from './CardContainer';
import CardPlus from './CardPlus';

import TransformingInput from '../../components/TransformingInput';

import * as groupActions from '../../actions/Group';

export default class GroupController extends Component {
  constructor(dispatch, group) {
    super({classes: ['card__group']});

    this.addChild(new TransformingInput(
        new Component({
          content: `${group.name}`,
          classes: ['group__name'],
        }),
        {
          content: `${group.name}`,
          classes: ['group__name'],
        })
        .setOnBlur((text) => {
          dispatch(groupActions.rename(text, group['board_id'], group.id));
        })
        .useDblclick()
    );

    this.addChild(new CardContainer(...group.cards));
    this.addChild(new Component({
      classes: ['board__card__container'],
    }).addChild(new CardPlus()));

    // this.group = group;
  }
}
