const user1 = {
    name: 'Roman',
    age: 32,
    language: 'JS',
};

const user2 = {
    name: 'Denis',
    age: 20,
    language: 'PHP',
    year: 2002
};

//  Метод поверхностного копирования, который копирует 1й уровень вложеноти у объектов заменяя их, а 2й+ уровень делает ссылками. Важно понять что он не соединяет объект а "налаживает друг на друга" 

const newObj = Object.assign({}, user2, user1);

// console.log(user1);
// console.log(user2);
// console.log(newObj);

// метод глубокого копирования c помощью JSON

const newObj2 = JSON.parse(JSON.stringify(user1));

// console.log(newObj2);

// keys() - переводит объект в масив где значения взяты из key
const keys = Object.keys(user1);

console.log(keys);

// values() - переводит объект в масив где значения взяты из value
const values = Object.values(user1)

console.log(values);

// entries() переводит объект в масив масивов где значения в масиве беруться из key and value { key : value } => [ [ 'key' , 'value ] ]
const entries = Object.entries(user1);

console.log(entries);

// fromEnries() -переводит масива в объект со значениями key : values [ [ 'key' , 'value' ] ] => { key: value }
const fromEnties = Object.fromEntries(entries);

console.log(fromEnties);