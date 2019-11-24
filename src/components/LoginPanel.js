import './css/login.css';
import Component from '../modules/Component';


export default class LoginPanel extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'login',
      },
      children: [ 'типа логин' ],
    }
  }
}
