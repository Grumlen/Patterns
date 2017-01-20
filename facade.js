function Numbers(x,y) {
  this.x = x;
  this.y = y;
}
Numbers.prototype = {
  add: function () {
    return this.x+this.y;
  },
  subtract: function () {
    return this.x-this.y;
  },
  multiply: function () {
    return this.x*this.y;
  },
  divide: function () {
    return this.x/this.y;
  }
};
function xIs6(y) {
  return new Numbers(6,y);
}
xIs6(10).mul();
xIs6(3).subtract();
