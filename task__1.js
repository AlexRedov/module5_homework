let number = +prompt('Введите число');

if (number == number) {

 if (typeof number == 'number') {
  if (number % 2 == 0) {
    console.log(number + ' четное число');
  } else {
    console.log(number + ' нечётное число');
  }
 }
} else {
  console.log('Упс, кажется вы ошиблись')
}