import Component from "../../modules/Component";

export default class LogStateButton extends Component {
  render() {
    return {
      tag: 'button',
      events: {
        click: () => {console.log(this.attrs.store.state)},
      },
      attrs: {
        style: {
          'position': 'fixed',
          'bottom': '10%',
          'z-index': 9999,
        }
      },
      children: [ "log state" ]
    }
  }
}