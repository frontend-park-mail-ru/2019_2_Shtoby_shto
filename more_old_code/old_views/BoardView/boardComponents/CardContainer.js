import Component from '../../../modules/Component';
import Card from './Card';

export default class CardContainer extends Component {
  constructor(dispatch, ...cards) {
    super({classes: ['card__container']});

    cards.forEach((c) => {
      this.addChild(new Card(c, dispatch));
    });
  }
}
