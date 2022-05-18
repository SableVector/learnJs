// ФУНКЦИЯ ЗАМІКАНИЯ

function getFullName(firstname, lastName) {
    return function () {
        return `${firstname} ${lastName}`;
    }
}

const getName = getFullName('Roman', 'Lutchenko');

console.log(getName());

function updateValue(value = 0) {
    let x = value;

    return function (num) {
        return (x += num);
    }
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);
console.log(updtVal(1));
console.log(updtVal(2));
console.log(updtVal(3));
console.log(updtVal2(2));
console.log(updtVal2(4));
console.log(updtVal2(6));

function checkCred() {
    let login = 'Roman';
    let password = 'myPassword';

    return {
        checkLogin(value) { return login === value; },
        checkPassword(value) { return password === value; }
    };
}

const check = checkCred();
console.log(check); // Выдаст обьект с методами;
console.log(check.checkLogin('roman')); // Выдаст false так как переданное значение не совпадает с переменной сохраненной в checkCred


// =====================================================================================================================================

// 1 Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

const minus = (num) => {
    return function (lastNum) {
        return num - lastNum;
    }
}

console.log(minus(5)(6));

// 2 Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(num) {
    let firstNum = num;
    return function (secondaryNum) {
        return firstNum *= secondaryNum;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//  i. если передано пустое значение, то установить пустую строку
//  ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const stringModule = (function () {
    let str = '';

    function setStr(value = '') {
        return str = value.toString();
    }

    function getStr() {
        return str;
    }

    function getStrLength() {
        return str.length;
    }

    function reverseStr() {
        return str.split('').reverse().join('');
    }

    return {
        setStr,
        getStr,
        getStrLength,
        reverseStr
    }
})();

console.log(stringModule.setStr('abcde'));
console.log(stringModule.getStr());
console.log(stringModule.getStrLength());
console.log(stringModule.reverseStr());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки
// (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculated = (function () {
    let number = new Number;

    function setValue(value = 0) {
        number = value;
    }

    function plusValue(value = 0) {
        number += value;
    }

    function multiplyValue(value = 1) {
        number *= value;
    }

    function powValue(value = 1) {
        Math.pow(number, value);
    }

    function getValue() {
        number = number;
    }

    return {
        setValue,
        plusValue,
        multiplyValue,
        powValue,
        getValue
    }
})();

console.log(calculated.setValue(10));
// console.log(calculated.plusValue(5));
// console.log(calculated.multiplyValue(2));
// console.log(calculated.getValue());
// console.log(calculated.setValue(10).powValue(2));
