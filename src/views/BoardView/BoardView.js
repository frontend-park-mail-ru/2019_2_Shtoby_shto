import Component from '../../modules/Component';
import BoardTabContainer from './BoardTabContainer';

const template = require('./boardView.pug');
import './boardView.css';

import dnd from '../../modules/dnd';

export default class BoardView extends Component {
  constructor() {
    super();

    this.addChild(
        dnd(new BoardTabContainer()).makeDraggable(),
        'boardTabs'
    );
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
