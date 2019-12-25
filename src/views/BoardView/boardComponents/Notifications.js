import Component from "../../../modules/Component";
import WSCardAttacher from "../../../modules/WSCardAttacher";

import * as notifActions from "../../../actions/Notifications";

import './Notifications.css';

class Notification extends Component {
  constructor(cardId) {
    super({
      classes: ['notifications__notification'],
      // content: () => `Карточка ${cardId} обновлена!`
    });

    let text = (shortText) => new Component({
      content: () => `Карточка ${shortText}... обновлена!`
    });

    this.addChild(new Component({
      tag: 'span',
      content: 'x',
      classes: ['notifications__notification__closer',]
    }).apply((c) => {
      c.element.onclick = () => {
        console.log('we lisp now');
        c.element.hidden = true;
        text.element.hidden = true;
      }
    }));

    const shortText = cardId.substr(0, 6);

    text = text(shortText);
    this.addChild(text);

  }
}

export default class Notifications extends Component {
  constructor() {
    super({classes: ['notifications']});

  }

  setup() {
  }

  addNotification(refreshedCardId) {
    console.log('adding a notification')
    this.addChild(new Notification(refreshedCardId.card));
  }

  init(state) {
    WSCardAttacher.addCallback((refreshedCardId) => {
      this.addNotification(refreshedCardId);
      // console.log("notif callback called");
    });
  }
}
