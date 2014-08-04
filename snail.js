snail = function(array) {
  var w = array.length; 
  if (w == 0 || (w == 1 && array[0] == null || array[0].length == 1 || arra[0][0] == null)) {
    return [];
  }
  var ret = [], depth = 0;
  var push = Array.prototype.push;
  while (w > 1) {
    push.apply(ret, array[depth].slice(depth, depth + w));
    for (var i = 1; i <= w - 2; i++) {
      ret.push(array[depth + i][depth + w - 1]);
    }   
    push.apply(ret, array[depth + w - 1].slice(depth, depth + w).reverse());
    for (var i = w - 2; i >= 1; i--) {
      ret.push(array[depth + i][depth]);
    }   
    w = w - 2;  
    depth ++; 
  }
  if (w == 1) {
    array[depth] && ret.push(array[depth][depth]);
  }
  return ret;
}
