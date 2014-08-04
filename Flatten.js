var Flatten = function() {
  function flattenDeep(array, depth) {
    var ret = [];

    for (var i = 0, len = array.length; i < len; i++) {
      var item = array[i];
      if (item instanceof Array) {
        if (depth > 1) {
          ret.push(item);
        }
        else {
          ret = ret.concat(flattenDeep(item, depth + 1));
        }
      }
      else {
        ret.push(item);
      }
    }

    return ret;
  }
 
  var args = Array.prototype.slice.call(arguments, 0);

  return flattenDeep(args, -1);
}
