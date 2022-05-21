// Деструктуризация

// с масивами
function calcValue(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

console.log(calcValue(10, 15));

const [sum, sub] = calcValue(10, 15);
console.log(sum, sub);
const [sum1, , mult] = calcValue(10, 15);
console.log(sum1, mult);

// С объектами

const person = {
    name: 'Roman',
    age: 32,
    address: {
        country: "Ukrain",
        city: 'Chernihiv'
    }
};

const { name: firstName = 'Defalt name', age = 0, address: { country, city } } = person;
console.log(firstName, age, country);

const { name, ...info } = person;

console.log(name, info);

// function logPerson(per) {
//     console.log(per.name + ' ' + per.age);
// }

// =>

function logPerson({ name, age }) {
    console.log(name + ' ' + age);
}
logPerson(person);

// =================================
// 1 Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function foo(firstElement, ...arg) {
    return {
        first: firstElement,
        other: arg
    }
}

console.log(foo('a', 'b', 'c', 'd'));

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

const obj2 = {
    name: 'Google',
    info: {
        employees: ['‘Vlad’', '‘Olga’'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
}

function getInfo({ name, info: { partners: [first, second] } }) {
    console.log(`Name: ${name}`, `Partners: ${first}, ${second}`);
}

getInfo(obj2);



