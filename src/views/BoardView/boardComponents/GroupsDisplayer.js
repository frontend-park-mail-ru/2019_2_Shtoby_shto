import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';

import GroupController from './GroupController';

import GroupPlus from './GroupPlus';

import * as group from '../../../actions/Group';

export default class GroupDisplayer extends Component {
  constructor(dispatch, ...groups) {
    super({classes: ['group__displayer']});

    groups.forEach((group) => {
      this.addChild(
          new DNDComponent({classes: ['group__container']})
              .makeDroppable((arg, placed) => {
                if (placed instanceof GroupController) {
                  arg.getChild(0).placeHere(placed);
                }
              })
              .addChild(new GroupController(dispatch, group)));
    });

    this.addChild(new Component({classes: ['group__container']})
        .addChild(new GroupPlus().setOnBlur((text) => {
          if (text) dispatch(group.createGroup(text));
        }).setOnChange((text) => {
          if (text) dispatch(group.createGroup(text));
        })));
  }
}
