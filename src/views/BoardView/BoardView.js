import Component from '../../modules/Component';
import BoardTabsController from './boardComponents/BoardTabsController';
import SingleBoard from './boardComponents/SingleBoard';

import CardModal from './boardComponents/CardModal';
import Notifications from './boardComponents/Notifications';

import './boardView.css';


export default class BoardView extends Component {
  constructor() {
    super({
      classes: ['board__view'],
    });

    this.addChildren({
      boardTabs: new BoardTabsController(),
      board: new SingleBoard(),
      modal: new CardModal({}),
      notifications: new Notifications(),
    });
  }

  generateContent() {
    return `
      <boardtabs></boardtabs>
      <singleboard></singleboard>
      <modal></modal>
      <notifications></notifications>
    `;
  }

  getMounts() {
    return {
      boardTabs: this.element.getElementsByTagName('boardtabs')[0],
      board: this.element.getElementsByTagName('singleboard')[0],
      modal: this.element.getElementsByTagName('modal')[0],
      notifications: this.element.getElementsByTagName('notifications')[0],
    };
  }
}
