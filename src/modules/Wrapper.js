export default class Wrapper {
  // какие методы обёртки прокидывать в обёртываемый объект
  constructor(wrapped, ...methods) {
    this.wrapped = wrapped;

    methods.forEach((method) => {
      this.wrapped[method] = (...args) => {
        const retVal = this[method](...args);

        if (retVal === this) {
          return this.wrapped;
        }

        // return this.wrapped;
      };
    });
  }
}
