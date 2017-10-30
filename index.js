
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n) {
  var rlist = document.querySelectorAll(".ranked-list");

  var size = rlist.length;

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < rlist[i].children.length; j++) {

      let inV = rlist[i].children[j].innerHTML;
      rlist[i].children[j].innerHTML = parseInt(inV) + n;

    }
  }

}
