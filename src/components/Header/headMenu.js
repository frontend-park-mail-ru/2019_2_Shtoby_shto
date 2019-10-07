import './headMenu.css';

/**
 * Генерирует верхнюю панель
 */
export function createHeader() {
  const template = require('./headMenu.pug');
  const headerContent = document.getElementsByClassName('header')[0];
  headerContent.innerHTML = template();
}
