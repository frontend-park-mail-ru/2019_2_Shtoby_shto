import Component from '../../../modules/Component';
import GroupController from './GroupController';

import GroupPlus from './GroupPlus';

import * as group from '../../../actions/Group';

export default class GroupDisplayer extends Component {
  constructor(dispatch, ...groups) {
    super({classes: ['group__displayer']});

    groups.forEach((group) => {
      this.addChild(new GroupController(dispatch, group));
    });

    this.addChild(new Component({classes: ['card__group']})
        .addChild(new GroupPlus().setOnBlur((text) => {
          if (text) dispatch(group.createGroup(text));
        })));
  }
}
