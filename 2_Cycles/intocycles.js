//С помощью двух вложенных циклов выведите на экран следующую строку:
//
//
let is = '111222333444555666777888999';
let res = '';
for (let i = 1; i < 10; i++) {
    for (let j = 1; j <=3; j++ ) {
        res += i;
    }
}

console.log(res);
if(is === res) {
    console.log(true);
} else {
    console.log(false);
}


//---------------------------------------------

//С помощью двух вложенных циклов выведите на экран следующую строку:
//
let ok ='11 12 13 21 22 23 31 32 33';
let check = '';

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <=3; j++ ) {
        check += `${i}${j} `
    }
}
check = check.trim();
console.log(check)
console.log(ok === check);
