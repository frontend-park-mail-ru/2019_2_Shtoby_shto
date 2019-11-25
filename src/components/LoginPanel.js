import './css/login.css';
import Component from '../modules/Component';

// class FormInput extends Component {
//   render() {
//     return {
//       tag: 'div', 'form__element'
//     }
//   }
// }
import * as userActions from '../actions/User';

class LoginForm extends Component {
  tryLogin() {
    const inputs = [...this.el.querySelectorAll('input')];

    const [login, pass] = inputs.map((el) => el.value);

    this.attrs.store.dispatch(userActions.login(login, pass));
  }

  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'login__form',
      },
      children: [
        {
          tag: 'div', attrs: {class: 'form__element'}, children: ['Логин'],
        },
        {
          tag: 'input', attrs: {class: 'form__element'},
        },
        {
          tag: 'div', attrs: {class: 'form__element'}, children: ['Пароль'],
        },
        {
          tag: 'input', attrs: {class: 'form__element'},
        },
        {
          tag: 'button',
          attrs: {class: 'form__element'}, children: ['войти'],
          events: {
            click: () => {
              this.tryLogin();
            },
          },
        },
      ],
    };
  }
}

export default class LoginPanel extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'login',
      },
      children: [
        {
          tag: 'div',
          attrs: {
            class: 'login__header',
          },
          children: ['Войти'],
        },
        {tag: LoginForm, attrs: {store: this.attrs.store}},
      ],
    };
  }
}
