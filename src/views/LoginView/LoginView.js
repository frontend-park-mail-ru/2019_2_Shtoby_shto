import Component from '../../modules/Component';
import Button from '../../components/Button';

const template = require('./loginView.pug');

export default class LoginView extends Component {
  constructor() {
    super();

    this.addChild(
        new Button({
          content: 'push me',
          onclick: () => {
            this.dispatch({type: 'LOGGED_IN', id: 1, login: 3});
          }}),
        'loginPanel'
    );
  }

  generateContent() {
    return template();
  }

  getMounts() {
    return {
      loginPanel: this.element.getElementsByClassName('loginPanel')[0],
    };
  }
}
