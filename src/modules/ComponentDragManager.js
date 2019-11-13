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

      const {top, left} = getCoords(this.wrapper.get().element);

      this.shift = {
        x: this.down.x - left,
        y: this.down.y - top,
      };

      this.startDrag();
    }

    // e.stopPropagation();

    this.wrapper.move(
        e.pageX - this.shift.x,
        // e.pageY - this.shift.y,
        e.pageY - this.shift.y - this.wrapper.get().element.offsetHeight / 2

    );
  }

  startDrag() {
    this.dragging = true;
    this.wrapper.executeOnDrag();

    // this.wrapper.move(0,
    // this.wrapper.get().element.offsetTop -
    // - this.wrapper.get().element.offsetTop);

    this.wrapper.conjureAvatar();
  }

  onMouseUp(e) {
    if (this.wrapper) {
      if (this.dragging) {
        e.stopPropagation();
        this.wrapper.move(9999, 9999);

        const foundDroppable = this.findDroppable(e.clientX, e.clientY);

        if (foundDroppable) {
          this.wrapper.executeOnDrop(foundDroppable);
          foundDroppable.dndwrapper.executeOnPlace(
              this.wrapper.get(), foundDroppable,
          );
        } else {
          this.wrapper.executeOnCancel(this.wrapper.get());
        }
      }

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
