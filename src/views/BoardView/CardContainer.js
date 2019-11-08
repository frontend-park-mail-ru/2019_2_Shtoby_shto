import Component from '../../modules/Component';
import Card from './Card';

export default class CardContainer extends Component {
  constructor(...cards) {
    super({classes: ['card__container']});

    cards.forEach((c) => {
      this.addChild(
          new Component({
            classes: ['board__card__container'],
          })
              .addChild(new Card(c)));
    });
  }
}
