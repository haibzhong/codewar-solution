function pickPeaks(arr) {
  var root = {};
  var current = root;
  var ret = {pos: [], peaks: []};

  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];
    if (current.value == null) {
      current.value = value;
      current.index = i;
    }
    else {
      if (current.value == value) {
        continue  
      }
      else {
        var next = {};
        next.value = value;
        next.prev = current;
        next.index = i;
        current.next = next;
        current = next;
      }
    }
  }
  var current = root.next;
  while (current && current.next) {
    if (current.value > current.next.value && current.value > current.prev.value) {
      ret.pos.push(current.index);
      ret.peaks.push(current.value);
      current = current.next.next;
    }
    else {
      current = current.next; 
    }
  }
  return ret;
}
