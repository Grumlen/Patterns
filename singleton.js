var singleton = (function() {
  var instance;
  function initialize () {
    var number = 10;
    return {
      getNumber: function () {
        return number;
      }
    }
  }
  return {
    init: function () {
      if (!instance) instance = initialize();
      return instance;
    }
  }
})();
var x = singleton.init();
console.log(x.getNumber);
