import DNDWrapper from './DNDWrapper';

export default function dnd(component, dragFun, dropFun, placeFun) {
  const newWrapper = new DNDWrapper(component);

  if (dragFun) newWrapper.makeDraggable(dragFun);
  if (dropFun) newWrapper.makeDraggable(null, dropFun);
  if (placeFun) newWrapper.makeDroppable(placeFun);

  return newWrapper.get();
}
