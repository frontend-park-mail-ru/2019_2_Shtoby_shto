import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';

import UserDisplayer from './UserDisplayer';

import * as boardActions from '../../../actions/Board';
import * as uiActions from '../../../actions/UI';
import WSUpdate from '../../../modules/WSUpdate';

export default class BoardTab extends DNDComponent {
  constructor(ownProps, index, board) {
    super({classes: ['board__tab'], ...ownProps});

    this.board = board;

    this.boardName = new TransformingInput(
        new Component({
          tag: 'div',
          classes: ['tab__name__container'],
        })
            .addChild(new Component({
              tag: 'span',
              classes: ['tab__name'],
              content: `${board.name}`,
            })),
        {
          classes: ['board__tab'],
          content: `${board.name}`,
        },
        'reset'
    ).setOnBlur((text) => {
      if (text) {
        //ownProps.dispatch(boardActions.updateBoard(board.users[0], board.id, text));
      }
    }).setOnChange((text) => {
      if (text) {
        ownProps.dispatch(boardActions.updateBoard(board.users[0], board.id, text));
      }
    });

    this.boardName.states['other']
        .element.ondblclick = () => {
          this.boardName.toInput();
        };

    // this.addChild(this.boardName);

    // this.avatars = new Component({classes: ['board__tab__avatars']})
    // .addChild(new UserDisplayer(
    this.avatars = new UserDisplayer(
        {
          classes: ['tab__user__displayer'],
          avatarClasses: ['tab__avatar'],
        },
        ...(board.users ? board.users : []),
    );

    // this.addChild(this.avatars);

    this.index = index;

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'upper'],
      content: '&nbsp;',
      index: index,
    }).makeDroppable((place, placed) => {
      if (placed instanceof BoardTab) {
        ownProps.dispatch(boardActions.insertAfter(
            placed.index, place.props.index
        ));
      }
    }).addChild(this.boardName)
    );

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'lower'],
      content: '&nbsp;',
      index: index,
    }).makeDroppable((place, placed) => {
      if (placed instanceof BoardTab) {
        ownProps.dispatch(boardActions.insertBefore(
            placed.index, place.props.index
        ));
      }
    }).addChild(this.avatars)
    );


    this.element.onclick = (e) => {
      e.stopPropagation();
      ownProps.dispatch(uiActions.selectBoard(index));
    };
  }

  select() {
    this.addStyle('selected');
    this.avatars.element.style.display = 'none';
  }

  deselect() {
    this.removeStyle('selected');
    // this.avatars.element.hidden = false;
    this.avatars.element.style.display = null;
  }

  del() {
    this.props.dispatch(boardActions.deleteBoard(this.board.id));
  }

  enableStuff() {
  }

  disableStuff() {
  }
}
