//Дан массив:
//
let arr = [10, 20, 30, 40, 21, 32, 51];

let sum = 0;
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i])
    if (num[0] === '1' || num[0] === '2') {
        sum += arr[i];
   }

}
console.log(sum);//51
