import TrelloApp from './TrelloApp';
// import DemoApp from './DemoApp';

const root = document.getElementById('app');
const app = new TrelloApp(root);
// const app = new DemoApp(root);
app.start();
