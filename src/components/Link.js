import Component from '../modules/Component';

export default class Link extends Component {
  constructor(ownProps) {
    super({
      content: ownProps.text, tag: 'a', attrs: {href: ownProps.path},
    });
  }
}
