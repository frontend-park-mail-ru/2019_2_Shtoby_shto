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

    const childVisiter = (comp, fun) => {
      fun(comp);
      comp.forEachChild((c) => {
        childVisiter(c, fun);
      });
    };

    childVisiter(this.root, (c) => {
      c.store = this.root.store;
      c.init();
    });

    this.root.render();

    if (this.synchronizer) {
      this.synchronizer.startSynchronizing();
    };
  }

  enableDebug() {
    setDebugAdder(this.root);
  }

  connect(store) {
    this.store = store;
    this.root.connect(store);
  }

  synchronize(key = 'state') {
    this.synchronizer= new StoreSaver(this.store, key);
  }

  setup() {}
}
