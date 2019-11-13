import Wrapper from './Wrapper';

import Component from './Component';
import ComponentDragManager from './ComponentDragManager';

export default class DNDWrapper extends Wrapper {
  constructor(component) {
    super(
        component,
        'makeDraggable', 'makeDroppable',
        'onDrag', 'onDrop', 'onPlace', 'onCancel',
    );
    this.wrapped.dndwrapper = this;

    this.old = null;
    this.placeholder = new Component();
    this.placeholder.trueone = this.wrapped;

    this.swapped = false;
  }

  makeDraggable(funDrag, funDrop, funCancel) {
    this.onDrag = funDrag || this.onDrag;
    this.onDrop = funDrop || this.onDrop;
    this.onCancel = funCancel || this.onCancel;

    this.wrapped.element.onmousedown = (e) => {
      e.stopPropagation();
      e.preventDefault();

      ComponentDragManager.grab(this, e.pageX, e.pageY);
    };

    return this;
  }

  makeDroppable(fun) {
    this.onPlace = fun || this.onPlace;
    this.wrapped.addStyle('dropzone');

    return this;
  }

  swapToPlaceholder() {
    // if (!this.swapped) {
    //   this.wrapped.parent.swapChild(this.wrapped, this.placeholder);
    //   this.swapped = true;
    // }
  }

  putOriginalBack() {
    // if (this.swapped) {
    //   this.placeholder.parent.swapChild(this.placeholder, this.wrapped);
    //   this.swapped = false;
    // }
  }

  move(x, y) {
    this.wrapped.element.style.left = `${x}px`;
    this.wrapped.element.style.top = `${y}px`;
  }

  conjureAvatar() {
    this.swapToPlaceholder();
    const el = this.wrapped.element;

    this.old = {
      position: el.position || '',
      left: el.left || '',
      top: el.top || '',
      zIndex: el.zIndex || '',
      width: el.width || '',
      height: el.height || '',
    };

    // document.body.appendChild(el);
    el.style.width = `${el.offsetWidth}px`;
    el.style.height = `${el.offsetHeight}px`;

    el.style.zIndex = 9999;
    el.style.position = 'absolute';

    // el.style.width = '100%';
  }

  kickAvatar() {
    Object.assign(this.wrapped.element.style, this.old);
    this.old = null;

    this.putOriginalBack();
  }

  executeOnDrag() {
    this.onDrag(this.wrapped);
  }

  executeOnDrop(dropped) {
    this.onDrop(this.wrapped, dropped);
  }

  executeOnPlace(placed) {
    this.onPlace(this.wrapped, placed);
  }

  executeOnCancel() {
    this.onCancel(this.wrapped);
  }

  get() {
    return this.wrapped;
  }

  // вызывается когда элемент начинает перемещение
  onDrag(dragged) {}

  // вызывается когда перемещающийся компонент был помещён на компонент
  onDrop(dropped, dropzone) {}

  // вызывается если элемент не был помещён на дроп-зону
  onCancel(dragged) {}

  // вызывается когда на компонент перемещён компонент
  onPlace(dropzone, dropped) {}
}
