import Component from '../Component';

import makeTraverser from './traverser';

import './debug.css';
const debugComponentClass = 'debug__component';

const componentTreeTraverser = makeTraverser('forEachChild');

function setDebugAdder(component, cls = debugComponentClass) {
  const debugAdder = (comp, mount) => {
    componentTreeTraverser(comp, (c) => {
      c.addStyle(cls);
      setDebugAdder(c);
    });

    Component.prototype.addChild.bind(component)(comp, mount);
  };

  component.addChild = debugAdder;
}

function logger(component) {
  componentTreeTraverser(component, (comp) => console.log(comp));
}


export {setDebugAdder, logger};
