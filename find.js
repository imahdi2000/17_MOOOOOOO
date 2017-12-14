var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return ((x1-x0)**2+(y1-y0)**2)**.5;
};

var dist = 0, maxDist = 0, percentage = 0, threshold = 0.03;

var findIt = function(e) {
  dist = distance(e.x, e.y, targetX, targetY);
  maxDist = distance(0, 0, boxWidth, boxHeight) / 2;
  percentage = dist/maxDist;
  percentage > threshold ? box.setAttribute("style", "background-color: rgba(0,0,125," + percentage + ")") : box.setAttribute("style", "cursor: pointer; background-color: rgba(0,0,125," + percentage + ")");
};

var foundIt = function(e) {
  if (percentage < threshold) alert("You found the cow!");
};

box.addEventListener("mousemove", findIt);
box.addEventListener("click", foundIt);
