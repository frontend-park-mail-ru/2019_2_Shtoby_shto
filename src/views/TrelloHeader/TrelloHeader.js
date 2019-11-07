import Component from '../../modules/Component';

import StateComponent from '../../components/StateComponent';
import Button from '../../components/Button';
import Link from '../../components/Link';

const template = require('./trelloHeader.pug');
import './trelloHeader.css';

import * as user from '../../actions/User';

class RightHeaderHalf extends StateComponent {
  constructor() {
    super();

    this.addStates({
      'no_auth': new Component({style: {display: 'flex'}})
          .addChild(new Link({text: 'вход', path: '/login'})),
      'auth': new Component({style: {display: 'flex'}})
          .addChildren(
              new Link({text: 'профиль', path: '/profile'}),
              new Link({text: 'доски', path: '/board'}),
              new Button({content: 'выйти', onclick: () => {
                this.dispatch(user.logout());
              }})
          ),
    });

    this.setState('no_auth');
  }
}

export default class TrelloHeader extends Component {
  constructor() {
    super({tag: 'header', classes: ['header']});

    this.addChildren({
      left: new Component({classes: ['header__left']}),
      right: new Component({classes: ['header__right']}),
    });

    this.rightHalf = new RightHeaderHalf();

    this.addLeft(new Link({text: 'домой', path: '/'}));
    this.addRight(this.rightHalf);
  }

  addLeft(component, mount) {
    this.getChild('left').addChild(component, mount);

    return this;
  }

  addRight(component, mount) {
    this.getChild('right').addChild(component, mount);

    return this;
  }

  generateContent() {
    return template();
  }

  getMounts() {
    return {
      left: this.element.getElementsByClassName('header__left')[0],
      right: this.element.getElementsByClassName('header__right')[0],
    };
  }

  init() {
    this.subscribe((state) => state.user.loggedIn);
  }

  stateUpdate(loggedIn) {
    if (loggedIn) {
      this.rightHalf.setState('auth');
      this.parent.open('/profile');
    } else {
      this.rightHalf.setState('no_auth');
    }
  }
}
