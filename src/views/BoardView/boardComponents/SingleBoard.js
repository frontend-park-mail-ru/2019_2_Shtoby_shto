import Component from '../../../modules/Component';

import GroupsDisplayer from './GroupsDisplayer';
import UserDisplayer from './UserDisplayer';

import Trashbin from './Trashbin';
import OutputAttachLink from './OutputAttachLink';

import dnd from '../../../modules/dnd';

import * as boardActions from '../../../actions/Board';
import Button from '../../../components/Button';
import {fetchBoards} from '../../../actions/Board';

export default class SingleBoard extends Component {
  constructor() {
    super({classes: ['single__board']});

    this.addChild(new Trashbin());
    // this.addChild(new OutputAttachLink(this.state.board));
    // console.log(this.attrs.board_id);
  }

  generateContent() {
    return '<users></users><groups></groups><attachLink></attachLink>';
  }

  getMounts() {
    return {
      users: this.element.getElementsByTagName('users')[0],
      groups: this.element.getElementsByTagName('groups')[0],
      attachLink: this.element.getElementsByTagName('attachLink')[0],
    };
  }

  init(state) {
    const selectedIndex = state.ui.selectedIndex;

    if (typeof selectedIndex !== 'undefined') {
      const selectedBoard = state.boards[selectedIndex];
      this.tryShowBoard(selectedBoard);
      this.refreshbutton(selectedBoard);
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
    this.addChild(new OutputAttachLink(board.shortUrl || board['short_url']), 'attachLink');
    // this.addChild(new UserDisplayer(
    //     {
    //       classes: ['user__panel'],
    //       avatarClasses: ['card__avatar'],
    //     },
    //     ...board.users).forEachChild((child) => {
    //   dnd(child).makeDraggable();
    // }), 'users'
    // );
  }

  refreshbutton(board) {
    this.addChild( new Component({
      tag: 'button',
      content: 'обновить',
    }),'attachLink');

    this.element.onclick = () => {
      console.log('clicked');
      this.refreshBoard(board);
    };
  }

  refreshBoard(board) {
    board.got=false;
    this.tryShowBoard(board);
  }

  // updateBoards(board) {
  //   this.addChild(new Button({
  //     content: 'Update',
  //     onclick: () => {
  //       fetchBoards();
  //     },
  //   }));
  //   // this.dispatch(boardActions.getBoard(board.id));
  // }
}
