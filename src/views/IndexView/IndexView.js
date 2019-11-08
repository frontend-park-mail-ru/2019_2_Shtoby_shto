import Component from '../../modules/Component';

const template = require('./index.pug');

import './index.css';

export default class MainView extends Component {
  generateContent() {
    return template();
  }
}
