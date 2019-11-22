import VDOM from './modules/VDOM';
import App from './App';

const AppVDOM = new VDOM(document.getElementById('root'));

AppVDOM.render({tag: App, attrs: {count: 0}}, root)
console.log(AppVDOM);
