// ЦИКЛЫ
// 1 Задача. Выведите столбец чисел от 1 до 50.
let counter = 1;
while (counter <= 50) {
    console.log(counter);
    counter++;
}
// 2 Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let numberArr = [1, 2, 3, 4, 5];

for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]);
}
// 3 Задача. Дан массив с элементами [2, 3, 4, 5]. 
// С помощью цикла for найдите произведение элементов этого массива.
numberArr = [2, 3, 4, 5]
result = [];

for (let i = 0; i < numberArr.length; i++) {
    result.push(numberArr[i] * numberArr[i]);
}

console.log(result);

result = 1;

for (let i = 0; i < numberArr.length; i++) {
    result *= numberArr[i];
}

console.log(result);
// 4 Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

const countryObj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
}

for (let key in countryObj) {
    console.log(`${key} - это ${countryObj[key]}`);
}

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

str = 'i am in the easycode';
let newStr = str.split(' ');
str2 = '';



for (let i = 0; i < newStr.length; i++) {
    let target = newStr[i];
    let left = target.slice(0, 1).toUpperCase();
    let right = target.slice(1, target.length);
    str2 += `${left}${right} `;
}

console.log(str2);

counter = 0;

while (counter < newStr.length) {
    let target = newStr[counter];
    let left = target.slice(0, 1).toUpperCase();
    let right = target.slice(1, target.length);
    str2 += `${left}${right} `;
    counter++;
}
console.log(str2);
// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
// (то есть последняя буква становится первой, предпоследняя - второй итд).
str = 'tseb eht ma i';
newStr = str.split(' ');
str2 = '';
counter = 0;

while (counter < newStr.length) {
    word = newStr[counter].split('').reverse().join('');
    str2 += `${word} `;
    counter++;
}

str2 = str2.split(' ').reverse().join(' ');
console.log(str);
console.log(str2);

str = 'tseb eht ma i';
str2 = '';

for (let i = 0; i < str.length; i++) {
    str2 += str[(str.length - 1) - i];
}

console.log(str2);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал 
// числа 10. Использовать for.
num = 12;
counter = 1;

for (let i = 1; i < num + 1; i++) {
    counter *= i;
    console.log(counter);
}

console.log(counter);
// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
str = 'JavaScript is a pretty good language';
newStrArr = str.split(' ');
str2 = '';

for (let i = 0; i < newStrArr.length - 1; i++) {
    let word = newStrArr[i];
    let upper = word.slice(0, 1).toUpperCase();
    let lower = word.slice(1, word.length).toLowerCase();
    str2 += upper + lower;
}

console.log(str2);
// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
// Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of array) {
    if (value % 2 !== 0) {
        console.log(value);
    }
}
// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. 
// Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let key in list) {
    if (typeof list[key] === 'string') {
        console.log(`Это строка ${list[key]}`)
        list[key] = list[key].toUpperCase();
    } else {
        continue;
    }
}

console.log(list);
