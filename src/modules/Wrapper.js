export default class Wrapper {
  // какие методы обёртки прокидывать в обёртываемый объект
  constructor(wrapped, ...methods) {
    this.wrapped = wrapped;

    methods.forEach((method) => {
      this.wrapped[method] = (...args) => {
        this[method](...args);

        return this.wrapped;
      };
    })
  }
}
