import VDOM from './modules/VDOM';
import App from './App';

const AppVDOM = new VDOM(document.getElementById('root'));

import makeGlobalStorage from './storage/makeGlobalStore';
import logger from './middlewares/logger';
import thunkDispatcher from './middlewares/thunkDispatcher';

import StoreSaver from './modules/StoreSaver';

const store = makeGlobalStorage(logger, thunkDispatcher);

const synchronizer = new StoreSaver(store, 'shtoby');
synchronizer.startSynchronizing();

const appVdom = {tag: App, attrs: {store}};
const appNode = AppVDOM.render(appVdom, root);

store.subscribe(() => {
  AppVDOM.update(appNode, appVdom);
  console.log(store.state);
});

console.log(store.state);
