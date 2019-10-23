import BaseView from '../../modules/BaseView';
import bus from '../../modules/bus';

const template = require('./login.pug');
import './login.css';

export default class LoginView extends BaseView {
  constructor(el, router) {
    super(el, router);

    this.el.innerHTML = template();
    this.errorArea = document.getElementsByClassName('errorArea').item(0);

    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });

    this.formIn = document.getElementsByTagName('form')[0];
    this.formIn.addEventListener('submit', this.login.bind(this));

    this.formUp = document.getElementsByTagName('form')[1];
    this.formUp.addEventListener('submit', this.register.bind(this));

    bus.on('logged_in', () => {
      this.router.open('/profile');
    });
  }

  render() {
  }

  login(event) {
    event.preventDefault();

    console.log('trying to login');

    const email = this.formIn.elements['email'].value;
    const password = this.formIn.elements['password'].value;
    const body = {'login': email, 'password': password};

    bus.emit('try_login', body);
  }

  register(event) {
    event.preventDefault();

    console.log('trying to register');

    const name = this.formUp.elements['name'].value;
    const email = this.formUp.elements['email'].value;
    const password = this.formUp.elements['password'].value;

    const body = {'name': name, 'login': email, 'password': password};
    bus.emit('try_register', body);
  }

  showError() {

  }
}
