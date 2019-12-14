import App from "./App";

import ResetButton from './components/debug/ResetButton';
import LogStateButton from "./components/debug/LogStateButton";

export default class DebugApp extends App {
  render() {
    const superRet = super.render();
    superRet.children = [
      ...superRet.children,
      {
        tag: ResetButton,
        attrs: {store: this.attrs.store}
      },
      {
        tag: LogStateButton,
        attrs: {store: this.attrs.store}
      }
    ]

    return superRet;
  }
}