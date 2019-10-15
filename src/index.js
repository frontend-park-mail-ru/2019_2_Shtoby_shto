import {hashRouter, router} from '../src/modules/router.js';
import {createHeader} from '../src/components/Header/headMenu.js';

document.addEventListener('DOMContentLoaded', function() {
  createHeader();
  window.addEventListener('hashchange', hashRouter);
  window.addEventListener('load', router);
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('build/service-worker.js').
          then((registration) => {
            console.log('SW registered: ', registration);
          }).
          catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
    });
  }
});
