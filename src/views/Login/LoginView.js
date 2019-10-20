import BaseView from '../../modules/BaseView';

const template = require('./login.pug');
import './login.css';
import './vidymgtu002.jpg';

export default class LoginView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
