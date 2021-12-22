let str = prompt('Введите строку');
console.log(str);
array = str.split('');
console.log(array);
arrayReversed = array.reverse();
console.log(arrayReversed);
newstr = arrayReversed.join('');
console.log(newstr);

/* Строка наоборот с помощью функции */
/* let str = prompt('Введите строку');
function strReverse(str) {
  newStr = str.split('').reverse().join('');
  return console.log(newStr);
}
strReverse(str); */