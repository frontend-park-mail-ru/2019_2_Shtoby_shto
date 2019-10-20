import BaseView from '../../modules/BaseView';

const template = require('./profile.pug');
import './profile.css';
import './userAva.png';
import './profilewolf.svg';

export default class ProfileView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
