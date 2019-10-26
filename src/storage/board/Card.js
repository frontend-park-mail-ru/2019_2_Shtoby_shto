export default class Card {
  constructor(caption) {
    this.caption = caption;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(offset) {
    this.tasks.splice(offset);
  }
}
