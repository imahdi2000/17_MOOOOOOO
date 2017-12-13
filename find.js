var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return ((x1-x0)**2+(y1-y0)**2)**.5;
};


var findIt = function(e) {
  var dist = distance(e.x, e.y, targetX, targetY);
  var maxDist = distance(0, 0, boxWidth, boxHeight);
  var color = 255 - (255 * (dist/maxDist));
  box.setAttribute("style", "background-color: rgb(" + color + "," + color + "," + color + ")");
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
