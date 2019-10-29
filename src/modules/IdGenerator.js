class IdGenerator {
  constructor() {
    this.counter = 0;
  }

  getId() {
    const id = this.counter;
    this.counter += 1;
    return id;
  }
};

export default new IdGenerator();
