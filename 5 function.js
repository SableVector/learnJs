// FUNCTIONS
// 1 Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их 
// произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply(numbers) {
    let result = 1;

    if (arguments.length !== 0) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];

            result *= element;
        }
    } else {
        result = 0;
    }


    return result;
}

console.log(multiply(1, 2, 3, 4, 5))

// 2 Создать функцию, которая принимает строку и возвращает строку-перевертыш: 
// reverseString(‘test’) // “tset”.
str = 'tset';
str2 = '';

function reverseString(str) {
    return str2 += str.split('').reverse().join('');
}

console.log(reverseString(str));

// 3 Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменен на юникод-значение символа: 
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
// подсказка: для получения кода используйте специальный метод 

function getCodeStringFromText(str) {

    let string = str.split('').join(' ');
    let newStr = '';

    for (let i = 0; i < string.length; i++) {
        string[i] !== ' ' ? newStr += string.charCodeAt(i) : newStr += ' ';
    }

    return newStr;
}

console.log(getCodeStringFromText('hello world'));


// 4 Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не 
// больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они 
// совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
// Числа в строке указаны как пример вы подставляете реальные числа.

function GuessTheNumber(number) {

    if (number > 0 && number <= 10) {
        let randomNumber = Math.ceil(Math.random() * 10);
        console.log(randomNumber);

        number !== randomNumber
            ? console.log(`Вы не угадали ваше число ${number} а выпало число ${randomNumber}`)
            : console.log('Вы выиграли');

    } else {
        console.log('Вы ввели неверное число!')
    }
}

GuessTheNumber(4);

// 	5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: 
// getArray(10); 
// [1,2,3,4,5,6,7,8,9,10] Данное задание выполните после того как познакомитесь с методами массивов.
function getArray(number) {
    let numberArr = [];

    for (let i = 0; i < number; i++) {
        numberArr.push(i + 1);
    }

    return numberArr;
}

console.log(getArray(200))

arr = [1, 2, 3, 4, 5, 6, 7]
const arrLength = arr.push(8)
console.log(arrLength)
// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами 
// входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
arr = [1, 2, 3]

function doubleArray(arr) {
    return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3]));
console.log(arr)
// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого 
// массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после 
// того как познакомитесь с методами массивов: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    let result = [];

    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {

            const arr = arguments[i].slice();

            arr.shift();
            result.push(arr);
        }
    }

    return result;
}
console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']))
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение 
// на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с 
// пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , 
// {name: “Ivan”, age: “20”, gender: “male”} ]
const userss = [
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    },
    {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    },
    {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
]


function funcGetUsers(array, key, value) {
    if (Array.isArray(array) && key && value) {
        const newArray = [];

        for (let i = 0; i < array.length; i++) {

            if (array[i][key] === value) {
                newArray.push(array[i]);
            }

        }
        return newArray;
    } else {
        return null;
    }
}

console.log(funcGetUsers(userss, 'gender', 'male'));