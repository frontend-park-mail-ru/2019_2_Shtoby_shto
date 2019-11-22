import Form from '../../old_components/Form';

import * as user from '../../actions/User';

const template = require('./signupForm.pug');

export default class SignupForm extends Form {
  generateContent() {
    return template();
  }

  onSubmit(formValues) {
    this.dispatch(user.register(
        formValues.email, formValues.password
    ));
  }

  setup() {
    super.setup();
    this.errorArea = this.element.querySelector('.signup__error');
  }

  init() {
    this.subscribe((state) => state.user.signupFailed);
  }

  stateUpdate(loginFailed) {
    if (loginFailed) {
      this.errorArea.innerText = 'Не удалось зарегистрироваться!';
    } else {
      this.errorArea.innerText = '';
    }
  }
}
