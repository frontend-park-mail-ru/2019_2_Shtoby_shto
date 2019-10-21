import './style.css';

import HeaderView from './views/Header/HeaderView';
import Router from './modules/router';
import routes from './routes';

import UserService from './modules/UserService';
import bus from './modules/bus';


bus.on('try_login', (info) => {
  UserService.login(info)
      .then(() => {
        bus.emit('logged_in', {});
      }).catch((err) => {
        bus.emit('login_failed', err);
      });
});

bus.on('try_register', (info) => {
  UserService.register(info)
      .then(() => {
        bus.emit('logged_in', {});
      }).catch((err) => {
        bus.emit('registration_failed', err);
      });
});

bus.on('logged_in', () => {
  router.open('/profile');
});

bus.on('fetch_user', () => {
  UserService.fetchUser()
      .then((user) => {
        bus.emit('got_user', user);
      })
      .catch((err) => {
        console.log('fetch user failed', err);
      });
});

bus.on('login_failed', (err) => {
  console.log('login failed!', err);
});

bus.on('register_failed', (err) => {
  console.log('register failed!');
});

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
