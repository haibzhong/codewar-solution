var moveZeros = function (arr) {
  var count = 0;
  arr.filter(function(v) {
    if(v === 0) {
      count ++;
      return false;
    }
    return true;
  });
  for (var i = 0; i < count; i++) {
    arr.push(0);
  }
  return arr;
}
