import Form from '../../components/Form';

import * as user from '../../actions/User';
import {checkEmail, checkPassword} from '../../modules/Utils/validation';
const template = require('./loginForm.pug');

export default class LoginForm extends Form {
  generateContent() {
    return template();
  }

  onSubmit(formValues) {
    const isvalid = checkEmail(formValues.email).err +' '+ checkPassword(formValues.password, formValues.password).err;
    if (isvalid !== ' ') {
      this.errorArea.innerText = isvalid;
    } else {
      this.errorArea.innerText = 'Отправляем данные на сервер...';
      this.dispatch(user.login(
          formValues.email, formValues.password
      ));
    }
  }

  setup() {
    super.setup();
    this.errorArea = this.element.querySelector('.login__error');
  }

  init(){
    this.subscribe((state) => state.user.loginFailed);
  }

  stateUpdate(loginFailed){
    if (loginFailed) {
      this.errorArea.innerText = 'Не удалось залогиниться!';
    } else {
      this.errorArea.innerText = '';
    }
  }
}
