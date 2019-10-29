import './style.css';

import HeaderView from './views/Header/HeaderView';
import Router from './modules/router';
import routes from './routes';

import UserService from './modules/UserService';
import BoardService from './modules/BoardService';
import bus from './modules/bus';


const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

console.log(apiAddr);

const us = new UserService(apiAddr);
us.registerEvents(bus);
us.profileEvents(bus);

const bs = new BoardService(apiAddr);
bs.registerEvents(bus);

const app = document.getElementById('app');
const router = new Router(app, HeaderView);

router.registerBunch(routes);

router.start();

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
