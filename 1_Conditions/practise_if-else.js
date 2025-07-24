//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

//  1
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

if (months[11] ||months[0] || months[1]) {
    console.log('это зима')
}
else if (months[2] || months[3] || months[4]) {
    console.log('это весна')
}
else if (months[5] || months[6] || months[7]) {
    console.log('это лето');
} else {
    console.log('это осень')
}


//--------------------------------------------------


//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde';

if (str.at(0) === 'a') {
    console.log('да');
} else {
    console.log('нет');
}

//-----------------------------------------------------


//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 12345;

if(num.toString().at(0) === '1' && num.toString().at(1) === '2' && num.toString().at(2) === '3') {
    console.log('да');
} else {
    console.log('нет')
}

//--------------------------------------------------------


//Дано трехзначное число. Найдите сумму цифр этого числа.


let sum = 753;

let sumStr =  sum.toString();   // нужно было сохранить в переменную

let first = Number(sumStr.at(0));
let second = Number(sumStr.at(1));
let third = Number(sumStr.at(2));

console.log(first+second+third);

//-------------------------------------------------------

//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let six = 742365;

let sixStr = six.toString();

let num1 = Number(sixStr.at(0));
let num2 = Number(sixStr.at(1));
let num3 = Number(sixStr.at(2));

let sum1 = num1 + num2 + num3;

let num4 = Number(sixStr.at(3));
let num5 = Number(sixStr.at(4));
let num6 = Number(sixStr.at(5));

let sum2 = num4 + num5 + num6;

if(sum1 === sum2) {
    console.log('числа равны')
} else {
    console.log('числа не равны')
}
