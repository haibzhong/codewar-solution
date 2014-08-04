// partition the items array so that all values for which pred returns true are
// // at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var farr = [], tarr = [];
  for (var i = 0, len = items.length; i < len; i++) {
    var val = items[i];
    pred(val) ? tarr.push(val) : farr.push(val);
  }
  items.length = 0;
  items.push.apply(items, farr);
  items.push.apply(items, tarr);
  return farr.length;
}
//var items = [1, 2, 3, 4, 5, 6];
//function isEven(n) {return n % 2 == 0}
//var i = partitionOn(isEven, items);
//Test.assertEquals( i, 3, 'partioned at 3' );
//Test.assertSimilar( items.slice(0, i), [1, 3, 5] );
//Test.assertSimilar( items.slice(i),    [2, 4, 6] );
