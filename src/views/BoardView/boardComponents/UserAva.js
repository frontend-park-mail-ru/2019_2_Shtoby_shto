import DNDComponent from '../../../modules/DNDComponent';
import Component from '../../../modules/Component';

import * as cardActions from '../../../actions/Card';

const defaultAva = require('./userAva.png');

import UserApi from '../../../apis/UserApi';

const userApi = new UserApi();

export default class UserAva extends DNDComponent {
  constructor(classes, imgpath, userId, cardId) {
    super({classes: ['tooltip']});

    this.username = 'loading...';

    this.addChild(new Component({
      tag: 'img',
      classes: [...classes, 'user__avatar'],
      attrs: {src: imgpath || defaultAva},
    }));

    this.addChild(new Component({
      tag: 'span', classes: ['tooltiptext'],
      content: () => this.username,
    }));

    console.log(userId);
    userApi.getSpecificUser(userId)
        .then((user) => {
          this.username = user.login;
          this.render();
        });


    this.imgpath = imgpath || defaultAva;

    this.userId = userId;
    this.cardId = cardId;
  }

  del() {
    this.dispatch(cardActions.detachUser(this.userId, this.cardId));
  }
}
