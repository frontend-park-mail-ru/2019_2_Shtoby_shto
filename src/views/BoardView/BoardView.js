import Component from '../../modules/Component';
import BoardTabContainer from './BoardTabContainer';

const template = require('./boardView.pug');
import './boardView.css';

export default class BoardView extends Component {
  constructor() {
    super();

    this.addChild(new BoardTabContainer(), 'boardTabs');
  }

  generateContent() {
    return template();
  }

  getMounts() {
    return {
      boardTabs: this.element.getElementsByClassName('board__tabs')[0],
      board: this.element.getElementsByClassName('selected__board')[0],
    };
  }
}
