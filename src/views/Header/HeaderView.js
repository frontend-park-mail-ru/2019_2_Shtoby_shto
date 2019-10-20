import BaseView from '../../modules/BaseView';

const template = require('./headMenu.pug');
import './headMenu.css';

export default class HeaderView extends BaseView {
  render() {
    // this.el.dataset.class = this.constructor.name;
    // this.el.dataset.class = 'header';
    this.el.class = 'header';
    this.el.innerHTML = template();
  }
}
