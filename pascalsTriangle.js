function pascalsTriangle(n) {
  var triangle = [];
  var depth = 0;
  
  while (n - depth) {
    triangle[depth] = [];
    for (var i  = 0; i < depth + 1; i++) {
      var left = triangle[depth-1] && triangle[depth-1][i-1];
      var right = triangle[depth-1] && triangle[depth-1][i];
      if (!left || !right) {
        triangle[depth].push(1);
      }
      else {
        triangle[depth].push(left + right);
      }
    }
    depth++;
  }
  
  var ret = [];
  for (i = 0, len = triangle.length; i < len; i++) {
    ret.push.apply(ret, triangle[i]);
  }
  return ret;
}
