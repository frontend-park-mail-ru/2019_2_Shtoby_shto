import BaseView from '../../modules/BaseView';
const template = require('./main.pug');
import './main.css';

export default class MainView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
