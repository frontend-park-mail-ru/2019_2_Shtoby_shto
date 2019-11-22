import Component from './modules/Component';

class Button extends Component {
  render() {
    return {
      tag: 'button',
      children: [`${this.attrs.text}`],
      attrs: {
        ...{
          id: this.attrs.count === 5 ? 5 : 0,
        },
        ...(this.attrs.count < 3 ? {draggable: 'true'} : {}),
        ...(this.attrs.count >= 6 ? {classes: ['sixer']} : {})
      }
    }
  }

  didMount() {
    this.el.addEventListener('click', this.attrs.onclick);
  }
}

export default class App extends Component {
  countUp() {
    this.updateAttrs({count: this.attrs.count + 1});
  }

  render() {
    return {
      tag: 'div',
      attrs: {
        classes: ['trello__app'],
      },
      children: [
        {
          tag: 'span',
          children: [`${this.attrs.count}`],
          // key: 'counter',
        },
        {
          tag: 'br',
        },
        this.attrs.count < 3 ? {
          tag: 'h2',
          children: ['counter is less than six'],
          // key: 'text',
        } : this.attrs.count > 6 ? {
          tag: 'h3',
          children: [{tag: 'h4', children: ["counter is more than six"]}],
          // key: 'text',
        } : '3 < counter < 6',
        {
          tag: Button,
          attrs: {
            text: 'press me',
            onclick: () => {this.countUp()},
            count: this.attrs.count,
          },
          key: 'button',
        },
        this.attrs.count < 3 ? {
          tag: 'h2',
          children: ['counter is less than six'],
          // key: 'text',
        } : this.attrs.count > 6 ? {
          tag: 'h3',
          children: [{tag: 'h4', children: ["counter is more than six"]}],
          // key: 'text',
        } : '3 < counter < 6',
        {
          tag: 'br'
        },
        // ...(this.attrs.count % 2 ? ["sum text"] : []),
        ...(this.attrs.count % 2 ? [{
          tag: 'span',
          children: ["counter is odd"]
        }] : ['even']),
        {
          tag: 'div',
          children: [
            {
              tag: 'div',
              children: [
                'just text in two divs'
              ],
              // key: 'ass',
            },
          ]
        },
        ...[this.attrs.count % 3 ? 'ass' : 'haha'],
      ]
    }
  }
}