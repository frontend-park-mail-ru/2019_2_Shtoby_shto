export default class Component {
  constructor(attrs = {}, children = [], vdom) {
    this.attrs = attrs;
    this.children = children;

    this.vdom = vdom;
  }

  updateAttrs(attrs) {
    this.vdom.update(
      this.el,
      {
        tag: this.el._vnode.tag,
        attrs: {...this.el._vnode.attrs, ...attrs}
      }
    )
    // this.vdom.update(
    //   this.el,
    //   {
    //     ...this.el._vnode,
    //     attrs:
    //     {
    //       ...this.el._vnode.attrs, ...attrs
    //     }
    //   }
    // )
  }

  otherAttrs() {
    
  }

  didCreate() {}

  didMount() {}

  willUnmount() {}

  willUpdate(attrs, children) {
    this.attrs = attrs;
    this.children = children;
  }

  didUpdate() {}

  render() {}
}
