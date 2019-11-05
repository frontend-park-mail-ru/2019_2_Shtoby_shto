import './style.css';

import UserService from './modules/UserService';
import bus from './modules/bus';

import TrelloApp from './TrelloApp';

const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

const us = new UserService(apiAddr);
us.registerEvents(bus);

const root = document.getElementById('app');
const app = new TrelloApp(root);
app.start();

// document.addEventListener('DOMContentLoaded', function() {
//   createHeader();
//   window.addEventListener('hashchange', hashRouter);
//   window.addEventListener('load', router);
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('build/service-worker.js').
//           then((registration) => {
//             console.log('SW registered: ', registration);
//           }).
//           catch((registrationError) => {
//             console.log('SW registration failed: ', registrationError);
//           });
//     });
//   }
// });
