export default function makeTraverser(childrenApplicator) {
  const traverser = (obj, fun) => {
    const childrenVisiter = (obj) => {
      fun(obj);
      obj[childrenApplicator](childrenVisiter);
    };

    childrenVisiter(obj);
  };

  return traverser;
}
