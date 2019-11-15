import Component from '../../../modules/Component';

export default class CardModal extends Component {
  constructor(ownProps) {
    super({...ownProps, classes: [...(ownProps.classes || []), 'card__modal']});

    window.onclick = function(e) {
      if (e.target == this.element) {
        console.log('clicked modal');
        this.element.style.display = 'none';
      }
    };
  }

  generateContent() {
    return '' +
      '<div class=\'modal__content\'>' +
        '<span class=\'modal__close\'>&times;</span>' +
        '<p>модалка</p>' +
      '</div>';
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}
