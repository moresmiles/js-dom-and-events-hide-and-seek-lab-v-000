function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector("#nested .target");
};

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');
    for (let i = 0; i < lis.length; i++) {
      let children = lis[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = Number(children[j].innerHTML) + n;
    };
  };
};

function deepestChild(){
  const nodes = document.querySelectorAll('#grand-node div');
  let deepestChild = nodes[nodes.length- 1];

  return deepestChild;
};
