import Component from '../../modules/Component';
import Button from '../../components/Button';

const template = require('./loginView.pug');

import * as user from '../../actions/User';

export default class LoginView extends Component {
  constructor() {
    super();

    this.addChild(
        new Button({
          content: 'push me',
          onclick: () => {
            // тут надо бы прокидывать какие-нибуд данные с формы,
            // но формы пока нет...
            this.dispatch(user.login());
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
