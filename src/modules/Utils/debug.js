import Component from '../Component';

import './debug.css';
const debugComponentClass = 'debug__component';

function setDebugAdder(component, cls = debugComponentClass) {
  component.forAllComponents((comp) => {
    comp.addStyle(cls);
    comp.addChild = (c, mount) => {
      setDebugAdder(c, cls);
      Component.prototype.addChild.bind(comp)(c, mount);
    };
  });
}

function logger(component) {
  component.forAllComponent((comp) => {
    console.log(comp);
  });
}


export {setDebugAdder, logger};
