var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
String.prototype.toBase64 = function() {
  var encoded = [];
  var a, b, c;
  for (var i = 0, len = this.length; i < len; i = i + 3) {
    a = this.charCodeAt(i);
    encoded.push(code[a >> 2]);

    b = this.charCodeAt(i + 1);
    if (isNaN(b)) {
      encoded.push(code[(a & 3) << 4]);
      encoded.push('=', '=');
    }
    else {
      encoded.push(code[(a & 3) << 4 | b >> 4]);

      c = this.charCodeAt(i + 2);
      if (isNaN(c)) {
        encoded.push(code[(b & 15) << 2]);
        encoded.push('=');
      }
      else {
        encoded.push(code[(b & 15) << 2 | c >> 6]);
        encoded.push(code[c & 63]);
      }
    }
  }

  return encoded.join('');
}

String.prototype.fromBase64 = function() {
  var m = {};
  var toChar = String.fromCharCode;
  code.forEach(function(value, index) {
    m[value] = index; 
  });
  var decoded = [];
  var a, b, c, d;

  for (var i = 0, len = this.length; i < len; i = i + 4) {
    a = this.charAt(i);
    b = this.charAt(i + 1);
    decoded.push(toChar(m[a] << 2 | m[b] >> 4));
    c = this.charAt(i + 2);
    if ( c !== '=' ) { 
      decoded.push(toChar((m[b] & 15) << 4 | m[c] >> 2));
      d = this.charAt(i + 3);
      if ( d !== '=' ) {
        decoded.push(toChar((m[c] & 3) << 6 | m[d]));
      }
    }
  }
  return decoded.join('');
}
