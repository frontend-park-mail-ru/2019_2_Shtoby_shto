import Component from '../../modules/Component';

import StateComponent from '../../old_components/StateComponent';
import Link from '../../old_components/Link';

const template = require('./trelloHeader.pug');
import './trelloHeader.css';

class RightHeaderHalf extends StateComponent {
  constructor(ownProps) {
    super(ownProps);

    this.addStates({
      'no_auth': new Component(ownProps)
          .addChild(
              new Link({
                text: 'вход',
                path: '/login',
                classes: ['header__elem'],
              })),
      'auth': new Component(ownProps)
          .addChildren(
              new Link({
                text: 'профиль',
                path: '/profile',
                classes: ['header__elem'],
              }),
              new Link({
                text: 'доски',
                path: '/board',
                classes: ['header__elem'],
              }),
              new Link({
                text: 'выйти',
                path: '/logout',
                classes: ['header__elem'],
              })
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
      right: new RightHeaderHalf({classes: ['header__right']}),
    });

    this.addLeft(new Link({text: 'домой', path: '/'}));
  }

  addLeft(component, mount) {
    this.getChild('left')
        .addChild(component.addStyle('header__elem'), mount);

    return this;
  }

  addRight(component, mount) {
    this.getChild('right').addChild(
        component,
        mount
    );

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

  switchAuth(loggedIn) {
    if (loggedIn) {
      this.getChild('right').setState('auth');
    } else {
      this.getChild('right').setState('no_auth');
    }
  }

  init(state) {
    this.switchAuth(state.user.loggedIn);
    this.subscribe((state) => state.user.loggedIn);
  }

  stateUpdate(loggedIn) {
    this.switchAuth(loggedIn);
  }
}
