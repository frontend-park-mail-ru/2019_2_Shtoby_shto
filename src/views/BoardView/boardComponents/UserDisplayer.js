import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';

const defaultAva = require('./userAva.png');

class UserAva extends DNDComponent {
  constructor(classes, imgpath) {
    super({classes: [...classes, 'user__avatar__container']});

    this.imgpath = imgpath || defaultAva;
  }

  generateContent() {
    return `<img class='user__avatar' src=${this.imgpath}></img>`;
  }
}

export default class UserDisplayer extends Component {
  constructor(ownProps, ...users) {
    super({classes: [...(ownProps.classes || []), 'user__display']});

    users.forEach((user) => {
      this.addChild(new UserAva(ownProps.avatarClasses || [], user.avatar)
          // .makeDraggable()
      );
    });
  }
}
