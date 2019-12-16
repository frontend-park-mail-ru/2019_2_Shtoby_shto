import Form from '../../components/Form';

import * as user from '../../actions/User';
import {checkEmail, checkPassword} from '../../modules/Utils/validation';

const template = require('./signupForm.pug');

export default class SignupForm extends Form {
  generateContent() {
    return template();
  }

  onSubmit(formValues) {
    const isvalid = checkEmail(formValues.email).err +' '+ checkPassword(formValues.password, formValues.password).err;
    if (isvalid !== ' ') {
      this.errorArea.innerText = isvalid;
    } else {
      this.errorArea.innerText = 'Данные корректны';
      this.dispatch(user.register(
          formValues.email, formValues.password
      ));
    }
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
