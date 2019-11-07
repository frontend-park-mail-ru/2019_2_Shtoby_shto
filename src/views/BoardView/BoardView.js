import Component from '../../modules/Component';
import BoardTabsController from './BoardTabsController';
import SingleBoard from './SingleBoard';

import './boardView.css';

export default class BoardView extends Component {
  constructor() {
    super({classes: ['board__view']});

    this.addChildren({
      boardTabs: new BoardTabsController(),
      board: new SingleBoard(),
    });
  }

  generateContent() {
    return '<boardtabs></boardtabs><singleboard></singleboard>';
  }

  getMounts() {
    return {
      boardTabs: this.element.getElementsByTagName('boardtabs')[0],
      board: this.element.getElementsByTagName('singleboard')[0],
    };
  }
}
