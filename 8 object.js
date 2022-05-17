// OBJECT
// 1. Создать объект с полем product, равным ‘iphone’
const obj = { product: 'iphone' };
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
obj.price = 1000;
obj.currency = 'dollar';
obj['price2'] = 1000;
obj['currency2'] = 'euro';
obj['price2'] = [1001, 2000, 3000]
// 3. Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
obj.details = {
    modal: {},
    color: {}
}

console.log(obj);

// || && if
let aa = 0 || 'string';	// 'string'	
console.log(aa);
aa = 1 && 'string';		// 'string'
console.log(aa);
aa = null || 25;		// 25
console.log(aa);
aa = null && 25;		// null
console.log(aa);
aa = null || 0 || 35;	// 35
console.log(aa);
aa = null && 0 && 35;	// null
console.log(aa);
// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
value = 'hidden';
console.log('value:', value);
if (value !== 'hidden') {
    value = 'hidden';
} else {
    value = "visible";
}
console.log(value);

value = value !== 'hidden' ? value = 'hidden' : value = 'visible'
console.log(value);
// 2. Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
value = 10;

if (value === 0) {
    value = 1;
} else if (value < 0) {
    value = 'less then zero';
} else if (value > 0) {
    value *= 10;
}

console.log(value);
// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.
const message = 'Need Repair';
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

if (car.age > 5) {
    console.log(`${car.name} ${message}`);
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(car.needRepair);
// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN 
// а также есть поле price значение которого также не NaN то в объекте item создать поле 
// priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание 
// что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. 
// иначе если поля discount нет то вывести просто поле price в консоль.
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}

if (item.discount
    && item.discount !== NaN
    && item.price !== NaN) {
    const newPrice = (parseInt(item.price) * parseInt(item.discount)) / 100;

    item.priceWithDiscount = `${newPrice}$`;

    console.log(item.priceWithDiscount)
} else if (!item.discount) {
    console.log(`${item.price}`);
}
// 5. Дан следующий код:
// let product = {
// name: “Яблоко”,
// price: “10$”
// };
// 
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// 
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной 
// цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
    name: 'Яблоко',
    price: '20$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена
const productPrice = parseFloat(product.price);

if (productPrice
    && productPrice >= min
    && productPrice <= max) {
    console.log(product.name);
} else {
    console.log('Извените, товар не найдун')
}