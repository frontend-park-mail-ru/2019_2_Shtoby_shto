import Component from '../../modules/Component';
import DNDComponent from '../../modules/DNDComponent';
import TransformingInput from '../../components/TransformingInput';

import * as board from '../../actions/Board';
import * as ui from '../../actions/UI';

export default class BoardTab extends DNDComponent {
  constructor(ownProps) {
    super({classes: ['board__tab'], ...ownProps});

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'upper'],
      content: '&nbsp;',
      index: ownProps.index,
    }).makeDroppable((place, placed) => {
      ownProps.dispatch(board.insertBefore(
          placed.props.index, place.props.index
      ));
      // ownProps.dispatch(board.shiftFrom(ownProps.index));
    }));

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'lower'],
      content: '&nbsp;',
      index: ownProps.index,
    }).makeDroppable((place, placed) => {
      // ownProps.dispatch(board.shiftIncluding(ownProps.index));
      ownProps.dispatch(board.insertAfter(
          placed.props.index, place.props.index
      ));
    }));

    const deleter = new Component({
      classes: ['tab__deleter'],
      content: 'x',
    });

    deleter.element.onclick = (e) => {
      e.stopPropagation();
      ownProps.dispatch(ui.deselectBoard(ownProps.index));
      ownProps.dispatch(board.deleteBoard(ownProps.id));
    };

    this.addChild(deleter);

    this.boardName = new TransformingInput(
        new Component({
          tag: 'div',
          classes: ['tab__name__container'],
        })
            .addChild(new Component({
              tag: 'span',
              classes: ['tab__name'],
              content: `${ownProps.name}`,
            })),
        {
          classes: ['board__tab'],
          content: `${ownProps.name}`,
        },
        'reset'
    ).setOnBlur((text) => {
      if (text) {
        ownProps.dispatch(board.updateBoard(ownProps.id, text));
      }
    });

    this.boardName.states['other']
        .element.ondblclick = () => {
          this.boardName.toInput();
        };

    this.addChild(this.boardName);

    this.element.onclick = () => {
      ownProps.dispatch(ui.selectBoard(ownProps.index));
    };
    // this.getChild(0).addChild(this.boardName);

    // this.makeDraggable(
    //     this.parent.enableHighliting.bind(this.parent),
    //     null,
    //     this.parent.disableHighliting.bind(this.parent),
    // );
  }

  enableStuff() {
  }

  disableStuff() {
  }
}
