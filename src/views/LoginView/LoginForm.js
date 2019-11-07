import Form from '../../components/Form';

import * as user from '../../actions/User';

const template = require('./loginForm.pug');

export default class LoginForm extends Form {
  generateContent() {
    return template();
  }

  onSubmit(formValues) {
    this.dispatch(user.login(
        formValues.email, formValues.password
    ));
  }

  setup() {
    super.setup();
    this.errorArea = this.element.querySelector('.login__error');
  }

  init() {
    this.subscribe((state) => state.user.loginFailed);
  }

  stateUpdate(loginFailed) {
    if (loginFailed) {
      this.errorArea.innerText = 'Не удалось залогиниться!';
    } else {
      this.errorArea.innerText = '';
    }
  }
}
