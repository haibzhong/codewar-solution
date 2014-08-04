function titleCase(title, minorWords) {
  minorWords = minorWords || '';
  var titleArr = title.toLowerCase().split(' ');
  var minoArr = minorWords.toLowerCase().split(' ');
  for (var i = 0, len = titleArr.length; i < len; i++) {
    var word = titleArr[i];
    if (word && i == 0 || minoArr.indexOf(word) == -1) {
      titleArr[i] = word[0].toUpperCase() + word.substring(1);
    } 
  } 
  return titleArr.join(' ');
}
