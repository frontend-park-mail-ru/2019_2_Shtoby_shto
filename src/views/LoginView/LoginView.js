import Component from '../../modules/Component';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const template = require('./loginView.pug');
import './login.css';
// import './vidymgtu002.jpg';

export default class LoginView extends Component {
  constructor() {
    super();

    this.addChildren({
      login: new LoginForm(),
      signup: new SignupForm(),
    });
  }

  generateContent() {
    return template();
  }

  setup() {
    this.element.querySelector('.img__btn')
        .addEventListener('click', () => {
          this.element.querySelector('.cont').classList.toggle('s--signup');
        });
  }

  getMounts() {
    return {
      login: this.element.querySelector('loginform'),
      signup: this.element.querySelector('signupform'),
    };
  }
}
