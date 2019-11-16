import Component from '../../../modules/Component';
import ExpandedCard from './ExpandedCard';

import * as uiActions from '../../../actions/UI';

export default class CardModal extends Component {
  constructor(ownProps) {
    super({...ownProps, classes: [...(ownProps.classes || []), 'card__modal']});

    window.onclick = (e) => {
      if (e.target == this.element) {
        this.dispatch(uiActions.closeModal());
      }
    };
  }

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
    this.props.userId = state.user.id;

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
    });

    this.dispatch(uiActions.closeModal());
  }

  stateUpdate(card) {
    if (card) {
      this.show(card);
    } else {
      this.close();
    }
  }

  show(modalCard) {
    this.element.style.display = 'block';

    this.addChild(
        new ExpandedCard(
            modalCard,
            this.dispatch.bind(this),
            this.props.userId
        ),
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
