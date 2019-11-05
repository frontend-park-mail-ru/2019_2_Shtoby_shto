import BaseView from '../../modules/BaseView';

const template = require('./board.pug');

export default class BoardView extends BaseView {
  render() {
    this.el.innerHTML = template();
  }
}
