import BaseView from '../../modules/BaseView';
import bus from '../../modules/bus';

export default class LogoutView extends BaseView {
  constructor(el, router) {
    super(el, router);
  }

  render() {
    bus.emit('logout');

    const logOuter = () => {
      bus.off('logged_out', logOuter);
      this.router.open('/');
    };

    bus.on('logged_out', logOuter);
  }
}
