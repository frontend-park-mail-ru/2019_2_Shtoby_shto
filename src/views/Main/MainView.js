import BaseView from '../../modules/BaseView';

const template = require('./main.pug');

export default class MainView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
