import Component from '../../modules/Component';

export default class SingleBoard extends Component {
  constructor() {
    super({classes: ['single__board']});
  }

  generateContent() {
    return 'тут одна доска';
  }
}
