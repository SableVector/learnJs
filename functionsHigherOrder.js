// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// 1. Написать аналог map.
function mapArr(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }

    return newArr;
}

function doubleNumber(num) {
    return num * num;
}

function lastLitteralToUpperCase(string) {
    let newString = '';
    let lastLitterUpperCase = string.slice(string.length - 1, string.length).toUpperCase();
    let word = string.slice(0, -1);
    return newString = word + lastLitterUpperCase;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrDouble = mapArr(arr, doubleNumber);
console.log(arrDouble)

arr = ['Petor', 'Jaroslav']
const litterUpperCase = mapArr(arr, lastLitteralToUpperCase);
console.log(litterUpperCase)

// 2. Написать аналог filter/

function filterArr(arr, value) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] === value ? newArr.push(arr[i]) : null;
    }

    return newArr;
}

arr = ['Petro', 'Anton', 'Denis'];
const denisName = filterArr(arr, 'Denis');
console.log(denisName);

// 3. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function showResult(arr, fn) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += fn(arr[i]);
    }

    return `New value: ${result}`;
}


function noSpace(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1, arr.length).toLowerCase();
}

function degreeTen(value) {
    return value * 10 + ', ';
}

function personsAge(value) {
    return `${value.name} is ${value.age}, `
}

function invertStr(value) {
    return value.split('').reverse().join('') + ', '
}

arr = ['my', 'name', 'is', 'Trinity'];
console.log(showResult(arr, noSpace));
arr = [10, 20, 30];
console.log(showResult(arr, degreeTen));
arr = [
    { age: 45, name: 'Jhon' },
    { age: 20, name: 'Aaron' }
];
console.log(showResult(arr, personsAge));
arr = ['abc', '123'];
console.log(showResult(arr, invertStr));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив 
// чисел (обязательно проверьте что передан массив) вторым аргументом callback 
// (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5).
// Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

function everyArr(arr, cb) {
    if (!Array.isArray(arr)) return console.error('Масив не масив');
    if (typeof cb !== 'function') return console.error('функция не функция');
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        if (!result) {
            result = false;
            break;
        } else {
            result = cb(arr[i], i, arr);
        }
    }

    return result;
}

function everyCb(element) {
    return element < 5;
}

arr = [10, 20, 30, 40, 50];
console.log(everyArr(arr, everyCb));