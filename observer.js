var obs1 = (function() {
  function update (x) {
    return console.log("You set x = "+x);
  }
  return {
    update
  };
})();
var obs2 = (function() {
  function update (x) {
    var temp;
    if (x%2) temp = "odd";
    else temp = "even";
    return console.log(x+" is an "+temp+" number.");
  }
  return {
    update
  };
})();
var obs3 = (function() {
  function update (x) {
    var temp;
    if (x>0) temp = "positive";
    else if  (x < 0) temp = "negative";
    else return console.log(x+" is zero.");
    return console.log(x+" is a "+temp+" number.");
  }
  return {
    update
  };
})();

var subject = (function(){
  var x = 5;
  var obsList = [obs1,obs2,obs3];
  function setX(value) {
    x = Math.round(value);
     return notify();
  }
  function notify() {
    for (var i = 0; i < obsList.length; i++) {
      obsList[i].update(x);
    }
  }
  return {
    setX
  };
})();
