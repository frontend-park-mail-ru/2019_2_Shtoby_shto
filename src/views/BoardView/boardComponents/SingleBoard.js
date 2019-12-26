import Component from '../../../modules/Component';

import GroupsDisplayer from './GroupsDisplayer';
import UserDisplayer from './UserDisplayer';

import Trashbin from './Trashbin';
//import OutputAttachLink from '../../../../old_code/OutputAttachLink';

import dnd from '../../../modules/dnd';

import * as boardActions from '../../../actions/Board';
import Button from '../../../components/Button';
import {fetchBoards} from '../../../actions/Board';
import Notifications from './Notifications';

export default class SingleBoard extends Component {
  constructor() {
    super({classes: ['single__board']});

    this.addChild(new Trashbin());
    this.addChild(new Notifications());
  }

  generateContent() {
    return `
      <users></users>
      <groups></groups>
      <attachLink></attachLink>
      <refreshButton></refreshButton>
      <notifications></notifications>
    `;
  }

  getMounts() {
    return {
      users: this.element.getElementsByTagName('users')[0],
      groups: this.element.getElementsByTagName('groups')[0],
      attachLink: this.element.getElementsByTagName('attachLink')[0],
      refreshButton: this.element.getElementsByTagName('refreshButton')[0],
      notifications: this.element.getElementsByTagName('notifications')[0],
    };
  }

  init(state) {
    const selectedIndex = state.ui.selectedIndex;

    if (typeof selectedIndex !== 'undefined') {
      const selectedBoard = state.boards[selectedIndex];
      this.tryShowBoard(selectedBoard);
    }

    this.subscribe((state) => state.boards[state.ui.selectedIndex]);
  }

  stateUpdate(board) {
    if (board) {
      this.tryShowBoard(board);
    } else {
      this.deleteChild(this.getChild('groups'));
    }
  }

  tryShowBoard(board) {
    if (board.got) {
      this.showBoard(board);
    } else {
      this.dispatch(boardActions.getBoard(board.id));
    }
  }

  showBoard(board) {
    this.addChild(new GroupsDisplayer(this.dispatch.bind(this),
        ...board.cardGroups), 'groups');

    this.addChild(new UserDisplayer(
        {
          classes: ['user__panel'],
          avatarClasses: ['card__avatar'],
        },
        ...board.users).forEachChild((child) => {
      dnd(child).makeDraggable();
    }), 'users'
    );
  }

  refreshBoard(board) {
    board.got=false;
    this.tryShowBoard(board);
  }
}
