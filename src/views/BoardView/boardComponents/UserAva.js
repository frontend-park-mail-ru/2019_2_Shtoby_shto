import DNDComponent from '../../../modules/DNDComponent';

import * as cardActions from '../../../actions/Card';

const defaultAva = require('./userAva.png');

export default class UserAva extends DNDComponent {
  constructor(classes, imgpath, userId, cardId) {
    super({
      tag: 'img',
      classes: [...classes, 'user__avatar'],
      attrs: {src: imgpath || defaultAva},
    });

    this.imgpath = imgpath || defaultAva;

    this.userId = userId;
    this.cardId = cardId;
  }

  del() {
    this.dispatch(cardActions.detachUser(this.userId, this.cardId));
  }
}
