import './style.css';

import HeaderView from './views/Header/HeaderView';
import Router from './modules/router';
import routes from './routes';
// import MainView from './views/Main/MainView';
// import LoginView from './views/Login/LoginView';
// import ProfileView from './views/Profile/ProfileView';
// import BoardView from './views/Board/BoardView';

const app = document.getElementById('app');
const router = new Router(app, HeaderView);

router.registerBunch(routes);

// router.register('/', MainView);
// router.register('/login', LoginView);
// router.register('/profile', ProfileView);
// router.register('/board', BoardView);

router.start();
// import {hashRouter, router} from './modules/router.js';
// import {createHeader} from './components/Header/headMenu.js';

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
