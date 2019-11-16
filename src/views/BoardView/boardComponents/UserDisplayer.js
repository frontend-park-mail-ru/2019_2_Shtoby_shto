import Component from '../../../modules/Component';

import UserAva from './UserAva';

export default class UserDisplayer extends Component {
  constructor(ownProps, ...users) {
    super({classes: [...(ownProps.classes || []), 'user__display']});

    users.forEach((user) => {
      this.addChild(
          new UserAva(ownProps.avatarClasses || [], user.avatar, user)
          // .makeDraggable()
      );
    });
  }
}
