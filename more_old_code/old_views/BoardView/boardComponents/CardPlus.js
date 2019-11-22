import Component from '../../../modules/Component';
import TransformingInput from '../../../old_components/TransformingInput';

export default class CardPlus extends TransformingInput {
  constructor() {
    super(
        new Component({
          content: '+', classes: ['board__card', 'card__plus'],
        }),
        {
          classes: ['board__card', 'card__plus'],
        }
    );

    this.states['other'].element.onclick = this.toInput.bind(this);
  }
}
