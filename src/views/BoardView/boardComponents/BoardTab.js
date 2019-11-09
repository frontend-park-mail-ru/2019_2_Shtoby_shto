import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';

import * as boardActions from '../../../actions/Board';
import * as uiActions from '../../../actions/UI';

export default class BoardTab extends DNDComponent {
  constructor(ownProps) {
    super({classes: ['board__tab'], ...ownProps});

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'upper'],
      content: '&nbsp;',
      index: ownProps.index,
    }).makeDroppable((place, placed) => {
      ownProps.dispatch(boardActions.insertBefore(
          placed.props.index, place.props.index
      ));
    }));

    this.addChild(new DNDComponent({
      classes: ['tab__dropzone', 'lower'],
      content: '&nbsp;',
      index: ownProps.index,
    }).makeDroppable((place, placed) => {
      ownProps.dispatch(boardActions.insertAfter(
          placed.props.index, place.props.index
      ));
    }));

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
        ownProps.dispatch(boardActions.updateBoard(ownProps.id, text));
      }
    });

    this.boardName.states['other']
        .element.ondblclick = () => {
          this.boardName.toInput();
        };

    this.addChild(this.boardName);

    this.element.onclick = () => {
      ownProps.dispatch(uiActions.selectBoard(ownProps.index));
    };
  }

  del() {
    this.props.dispatch(boardActions.deleteBoard(this.props.id));
  }

  enableStuff() {
  }

  disableStuff() {
  }
}
