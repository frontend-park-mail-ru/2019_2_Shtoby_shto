import Component from '../../modules/Component';
import TransformingInput from '../../components/TransformingInput';

export default class GroupPlus extends TransformingInput {
  constructor() {
    super(
        new Component({
          content: 'Новая группа', classes: ['group__header', 'group__plus'],
        }),
        {
          classes: ['group__header', 'group__input'],
        }
    );

    this.states['other'].element.onclick = this.toInput.bind(this);
    // super({
    // classes: ['card__group', 'group__plus'],
    // });
  }
}
