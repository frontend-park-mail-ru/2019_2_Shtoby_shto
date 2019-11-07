import getCoords from './Utils/getCoords';

class ComponentDragManager {
  constructor() {
    this.wrapper = null;
    this.old = null;
    this.dragging = false;

    this.downX = null;
    this.downY = null;

    document.onmousemove = this.onMouseMove.bind(this);
    document.onmouseup = this.onMouseUp.bind(this);
  }

  grab(wrapper, x, y) {
    this.wrapper = wrapper;
    this.down = {x: x, y: y};
  }

  release() {
    this.wrapper.kickAvatar();

    this.dragging = false;
    this.wrapper = null;
    this.down = {};
    this.shift = {};
  }

  onMouseMove(e) {
    if (!this.wrapper) return;

    if (!this.dragging) {
      const moveX = e.pageX - this.wrapper.get().element.downX;
      const moveY = e.pageY - this.wrapper.get().element.downY;

      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      };

      const coords = getCoords(this.wrapper.get().element);

      this.shift = {
        x: this.down.x - coords.left,
        y: this.down.y - coords.top,
      };

      this.startDrag();
    }

    // e.stopPropagation();

    this.wrapper.move(
        e.pageX - this.shift.x,
        e.pageY - this.shift.y
    );
  }

  startDrag() {
    this.dragging = true;
    this.wrapper.executeOnDrag();
    this.wrapper.conjureAvatar();
  }

  onMouseUp(e) {
    if (this.wrapper) {
      // e.stopPropagation();

      this.wrapper.get().element.hidden = true;

      const foundDroppable = this.findDroppable(e.clientX, e.clientY);
      if (foundDroppable) {
        this.wrapper.executeOnDrop(foundDroppable);
        foundDroppable.dndwrapper.executeOnPlace(this.wrapper.get());
      }

      this.wrapper.get().element.hidden = false;

      this.release();
    }
  }

  findDroppable(x, y) {
    let foundComponent = null;
    const foundEl = document.elementFromPoint(x, y);

    if (foundEl) {
      const closestEl = foundEl.closest('.dropzone');
      if (closestEl && closestEl.component) {
        foundComponent = closestEl.component;
      }
    }

    return foundComponent;
  }
};

export default new ComponentDragManager();
