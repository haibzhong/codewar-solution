// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(fn) {
  var ct = this.prototype.constructor;
  var scope = this;
  return function() {
    return fn.apply(this,[ct.apply(this, arguments)]);
  }
}

