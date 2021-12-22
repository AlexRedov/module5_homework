let arr = [1,1,1,1,12];
let newArr=[];
for (let i=0; i<arr.length; i++) {
  if (arr[i] === arr[0]) {
    newArr[i] = true;
  } else {
   newArr[i] = false;
  } 
}
let check = true;
for (i=0; i<newArr.length; i++){
  check = newArr[i] && check;
}
console.log(newArr);
console.log(check);