import Component from './Component';
import dnd from './dnd';

const defaultProps = {
  onDrag: undefined,
  onDrop: undefined,
  onPlace: undefined,
};

export default class DNDComponent extends Component {
  constructor(ownProps) {
    super(ownProps);

    const dndProps = Object.assign({}, defaultProps, ownProps);
    dnd(this, dndProps.onDrag, dndProps.onDrop, dndProps.onPlace);
  }

  makeDraggable(dragFun, dropFun, cancelFun) {
    this.dndwrapper.makeDraggable(dragFun, dropFun, cancelFun);

    return this;
  }

  makeDroppable(placeFun) {
    this.dndwrapper.makeDroppable(placeFun);

    return this;
  }

  setOnDrag(fun) {
    this.makeDraggable(fun);

    return this;
  }

  setOnDrop(fun) {
    this.makeDraggable(null, fun);

    return this;
  }

  setOnCancel(fun) {
    this.makeDraggable(null, null, fun);

    return this;
  }

  setOnPlace(fun) {
    this.makeDroppable(fun);

    return this;
  }
}
