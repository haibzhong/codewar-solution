function validBraces(braces){
  var match = {'(': ')', '{': '}', '[': ']'};
  var stack = [];
  var ch;
  for (var i = 0, len = braces.length; i < len; i++) {
    ch = braces.charAt(i);
    if (ch == '{' || ch == '[' || ch == '(') {
      stack.push(ch);
    }
    else if (ch == '}' || ch == ']' || ch == ')') {
      if (match[stack.pop()] !== ch) {
        return false;
      }
    }
  }
  return !stack.length;
}
