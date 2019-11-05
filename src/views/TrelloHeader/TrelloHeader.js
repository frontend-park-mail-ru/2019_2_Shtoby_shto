import Component from '../../modules/Component';
import StateComponent from '../../components/StateComponent';
import Link from '../../components/Link';

const template = require('./trelloHeader.pug');
import './trelloHeader.css';
import Button from '../../components/Button';

export default class TrelloHeader extends Component {
  constructor() {
    super({tag: 'header', classes: ['header']});
    // this.render();

    this.addChild(new Component({classes: ['header__left']}), 'left');
    this.addChild(new Component({classes: ['header__right']}), 'right');

    this.addLeft(new Link({text: 'домой', path: '/'}));

    const loginStateComponent = new StateComponent();

    loginStateComponent
        .addState(
            'no_auth',
            new Component({style: {display: 'flex'}})
                .addChild(new Link({text: 'вход', path: '/login'}))
        )
        .addState(
            'auth',
            new Component({style: {display: 'flex'}})
                .addChild(new Link({text: 'профиль', path: '/profile'}))
                .addChild(new Link({text: 'доски', path: '/board'}))
                .addChild(new Button({
                  content: 'выйти', onclick: () => {
                    this.dispatch({type: 'LOGGED_OUT'});
                  },
                }))
        );

    this.loginStateComponent = loginStateComponent;

    this.addRight(loginStateComponent.setState('no_auth'));

    this.addRight(new Component({content: 'ass'}));
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

  // относится к компоненту
  init() {
    this.subscribe((state) => state.user.loggedIn);
  }

  stateUpdate(loggedIn) {
    if (loggedIn) {
      this.loginStateComponent.setState('auth');
    } else {
      this.loginStateComponent.setState('no_auth');
    }
  }
}
