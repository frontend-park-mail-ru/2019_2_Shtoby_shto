import Component from '../../../modules/Component';
import ExpandedCard from './ExpandedCard';

import * as uiActions from '../../../actions/UI';

export default class CardModal extends Component {
  constructor(ownProps) {
    super({...ownProps, classes: [...(ownProps.classes || []), 'card__modal']});

    window.onclick = (e) => {
      if (e.target == this.element) {
        this.dispatch(uiActions.closeModal());
        // this.close();
        // this.element.style.display = 'none';
      }
    };
  }

  // cardDiv(card) {
  //   if (!card) {
  //     return '';
  //   }

  //   return `
  //     <div class='modal__caption'>
  //       ${card.caption}
  //     </div>
  //     <div class='modal__text'>
  //       ${card.text}
  //     </div>
  //     `;
  // }

  // generateContent(props) {
  // const {card} = props;
  // const {card} = props;

  // return '' +
  //   '<div class=\'modal__content\'>' +
  //     '<span class=\'modal__close\'>&times;</span>' +
  //     this.cardDiv(card) +
  // // '<p>модалка</p>' +
  //   '</div>';
  // }
  generateContent() {
    return `
      <div class='modal__content'><expandedcard></expandedcard></div>
    `;
  }

  getMounts() {
    return {
      expanded: this.element.getElementsByTagName('expandedcard')[0],
    };
  }

  init(state) {
    this.props.card = state.ui.modalCard;

    // this.subscribe((state) => ({modal: state.ui.modalCard}));
    this.subscribe((state) => {
      let retCard = undefined;
      const cardId = state.ui.modalCard.id;

      if (cardId) {
        state.boards.forEach((b) => {
          b.cardGroups.forEach((gr) => {
            gr.cards.forEach((c) => {
              if (c.id === cardId) {
                retCard = c;
              }
            });
          });
        });
      }

      return retCard;
      // return {card: retCard};
    });
  }

  stateUpdate(card) {
    if (card) {
      this.show(card);
    } else {
      this.close();
    }
    // if (newState) {
    //   if ('modal' in newState) {
    //     this.props.card = newState.modal;

    //     if (this.props.card) {
    //       this.show(this.props.card);
    //     } else {
    //       this.close();
    //     }
    //   }

    //   if ('card' in newState) {
    //     console.log(newState.card);
    //   }
    // }
  }

  show(modalCard) {
    this.element.style.display = 'block';

    this.addChild(
        new ExpandedCard(modalCard, this.dispatch.bind(this)),
        'expanded'
    );

    this.render();
  }

  close() {
    this.element.style.display = 'none';
  }

  refreshCard(card) {
    const expanded = this.getChild('expanded');

    if (expanded) {
      expanded.renew(card);
    }
  }
}
