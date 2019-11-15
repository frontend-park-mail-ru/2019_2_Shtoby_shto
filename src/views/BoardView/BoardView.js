import Component from '../../modules/Component';
import BoardTabsController from './boardComponents/BoardTabsController';
import SingleBoard from './boardComponents/SingleBoard';

import CardModal from './boardComponents/CardModal';

import './boardView.css';

export default class BoardView extends Component {
  constructor() {
    super({classes: ['board__view']});

    this.addChildren({
      boardTabs: new BoardTabsController(),
      board: new SingleBoard(),
      modal: new CardModal({}),
    });

    // this.addChild(new CardModal({}));
  }

  generateContent() {
    return '<boardtabs></boardtabs><singleboard></singleboard><modal></modal>';
  }

  getMounts() {
    return {
      boardTabs: this.element.getElementsByTagName('boardtabs')[0],
      board: this.element.getElementsByTagName('singleboard')[0],
      modal: this.element.getElementsByTagName('modal')[0],
    };
  }

  // init(state) {
  //   this.subscribe(state => state.boards[state.ui.selectedIndex]);
  // }

  // stateUpdate(selectedBoard) {
  //   if (selectedBoard) {
  //     // this.getChild('modal').renew(selectedBoard);
  //   }
  // }
}
