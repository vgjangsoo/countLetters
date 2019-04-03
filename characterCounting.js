function countLetters (str) {
  str = str.split(' ').join('');
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    let letter = str[i]
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}
console.log(countLetters("lighthouse in the house"));