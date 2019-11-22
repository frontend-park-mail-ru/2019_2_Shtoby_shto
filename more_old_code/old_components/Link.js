import Component from '../modules/Component';

export default class Link extends Component {
  constructor(ownProps) {
    super({
      ...ownProps,
      content: ownProps.text,
      tag: 'a',
      attrs: {
        ...(ownProps.attrs ? ownProps.attrs : {}),
        href: ownProps.path,
      },
    });
  }
}
