import StoreSaver from './StoreSaver';
import Component from './Component';

const defaultAppElement = 'app';

import {setDebugAdder} from './Utils/debug';

export default class App {
  constructor(el, elName = defaultAppElement) {
    this.root = new Component({tag: elName});
    this.root.replaceElem(el);
  }

  addComponent(component) {
    this.root.addChild(component);
  }

  start() {
    this.setup();

    this.root.forAllComponents((comp) => {
      comp.store = this.root.store;
      comp.init();
    });

    if (this.synchronizer) {
      this.synchronizer.startSynchronizing();
    };

    if (this.globRouter) {
      this.globRouter.startRouting();
    }

    this.root.render();
  }

  enableDebug() {
    setDebugAdder(this.root);
  }

  connect(store) {
    this.store = store;
    this.root.connect(store);
  }

  synchronize(key = 'state') {
    this.synchronizer = new StoreSaver(this.store, key);
  }

  setup() {}
}
