let x = 'cnhd';
if (x == x) {
switch (typeof x) {
    case "number":
    console.log(x+' - число');
    break;
    case "string":
    console.log(x+' - строка');
    break;
    case "boolean":
    console.log(x+' - логический тип');
    break;  
  }
} else {
  console.log('Тип Х не определен')
}