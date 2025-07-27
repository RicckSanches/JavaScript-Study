//Дан массив:
//
let arr = ['a', 'b', '3', 'd', 'e'];
let flag = false;
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.

for( let key in arr ){
    if( arr[key] === 'c' ){
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('+++');
} else {
    console.log('---');
}

//----------------------------------------------------


//Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Исключаем чётные и кратные 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Проверяем делители до √n
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Проверка
console.log(isPrime(10));  
console.log(isPrime(17));