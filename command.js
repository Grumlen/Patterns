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
var xAndY = new Numbers(5,7);
xAndY.add();
