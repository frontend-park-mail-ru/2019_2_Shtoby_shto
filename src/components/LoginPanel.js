import './css/login.css';
import Component from '../modules/Component';

class LoginForm extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'login__form',
      },
      children: [
        {
          tag: 'input', attrs: { class: 'form__element'}
        },
        {
          tag: 'input', attrs: { class: 'form__element'}
        },
        {
          tag: 'button',
          attrs: { class: 'form__element'}, children: ['войти'],
          events: {
            click: (e) => {console.log('ass')},
          }
        },
      ],
    }
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
          children: [ 'логин' ],
        },
        { tag: LoginForm },
      ],
    }
  }
}
