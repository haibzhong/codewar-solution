function solution(number) {
  if (number <= 0) { 
    return '';
  }
  var codeMap = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
  var arr = _solution(number);
  var str = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    str.push(codeMap[arr[i]]);
  }
  return str.join('');
}

function _solution(number, isLeft) {
  var codes = [1, 5, 10, 50, 100, 500, 1000];
  var leftCodes = [1, 10, 100];
  var nearest, nearer, distance = 1000;
  var values = [];
  codes.forEach(function(v) {
    if (distance > Math.abs(v - number)) {
      nearer = nearest;
      nearest = v;
      distance = Math.abs(v - number);
    }
  });

  var leftNearest = 100;
  leftCodes.forEach(function(v) {
    if (number / v <= 10) {
      leftNearest = v;
    }
  });

  values.push(nearest);
  if (nearest > number) {
    var left = _solution(Math.abs(nearest - leftNearest), true);
    values = left.concat(values);

    for (var i = 1; number - leftNearest * i * 10 > 0; i++) {
      values.push(nearest);  
    }

    var right = _solution(Math.abs(nearest * i - number));
    values = values.concat(right);
  }
  else if (nearest < number) {
    values = values.concat(_solution(number - nearest));
  }
  return values;
}
