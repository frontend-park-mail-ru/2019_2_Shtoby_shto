import BaseView from '../../modules/BaseView';

const template = require('./about.pug');

export default class AboutView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
