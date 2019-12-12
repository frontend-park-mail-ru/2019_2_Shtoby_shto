import Component from "../../modules/Component";
import { logout } from "../../actions/User";

export default class ResetButton extends Component {
  render() {
    return {
      tag: 'button',
      events: {
        click: () => {this.attrs.store.dispatch(logout())},
      },
      attrs: {
        style: {
          'position': 'fixed',
          'bottom': '5%',
          'z-index': 9999,
        }
      },
      children: [
        "press me to clean store",
      ]
    }
  }
}
