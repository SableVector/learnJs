// ? SWITCH CASE

let color = 'red';

switch (color) {
    case "blue":
    case 'red':
        console.log(`color is ${color}`);
        break;
    default:
        console.log(`Цвет не обноружен`);
};

// 1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
let display = 'block';

switch (display) {
    case 'block':
    case 'none':
    case 'inline':
        console.log(`display: ${display}`);
        break;
    default:
        console.log(`display: other`);
}

// 2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
value = 'hidden';
console.log('value:', value);

value = value !== 'hidden' ? 'hidden' : 'visible';
console.log(value);


value = 10;

value = value === 0 ? 1 : value < 0 ? 'less then zero' : value * 10;
console.log(value);

// let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }
let isLocked = true;
!isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }
let isCorrect = true;
!isCorrect ? console.log('Incorrect!') : console.log('Correct!');

// let favoritePhrase = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }
let favoritePhrase = 'Love That!';
let message2;

message2 = favoritePhrase === 'Love That!' ? 'I love that!' : 'I don\'t love that!';
console.log(message2)

// let browser = 'Safar';

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = 'Safar'

message2 = browser === 'Chrome'
    ? console.log("You've got the Edge!")
    : browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'
        ? console.log('Okay we support these browsers too')
        : console.log('We hope that this page looks ok!');

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        console.log('Вы ввели число не соответствующее условию');
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

const users = [
    {
        'first-name': 'Oleg',
        'last-name': 'Snegkov',
        age: 20
    },
    {
        'first-name': 'Olga',
        'last-name': 'Petrova',
        age: 20
    },
    {
        'first-name': 'Petro',
        'last-name': 'Janishenko',
        age: 20
    }
]

const usersObj = {};

for (i = 0; i < users.length; i++) {
    usersObj[users[i]['first-name']] = users[i];
}

console.log(usersObj)