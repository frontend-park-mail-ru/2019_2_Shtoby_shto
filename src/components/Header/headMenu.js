/**
 * Генерирует верхнюю панель
 */
export function createHeader() {
  const template = require('./headMenu.pug');
  const headerContent = document.getElementById('header');
  headerContent.innerHTML = template();
}
