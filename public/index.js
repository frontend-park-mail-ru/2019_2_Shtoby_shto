import {hashRouter, router} from '../src/modules/router.js';
import {createHeader} from '../src/components/Header/headMenu.js';

document.addEventListener('DOMContentLoaded', function() {
  createHeader();
  window.addEventListener('hashchange', hashRouter);
  window.addEventListener('load', router);
});
