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

function logPerson({name,age}) {
    console.log(name + ' ' + age);
}
logPerson(person);