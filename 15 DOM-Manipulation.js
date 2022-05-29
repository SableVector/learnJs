// 1. Найти параграф и получить его текстовое содержимое(только текст!)
let p = document.querySelector('p');
let textP = p.textContent;
console.log(textP);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию(в виде объекта) о типе узла, об имени узла и о количестве
// дочерних узлов(если детей нет - 0).

function getInfo(domKnot) {
    return {
        type: domKnot.nodeName,
        name: domKnot.localName,
        amount: domKnot.childElementCount
    };
}

console.log(getInfo(document.querySelector('a')));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul)-- -> ["Link1", "Link2", "Link3"]
let list = document.querySelector('ul');
function getTextFromUl(list) {
    let links = list.querySelectorAll('a');
    let textContentLinks = [];

    links.forEach(item => textContentLinks.push(item.textContent));

    return textContentLinks;
}

console.log(getTextFromUl(list));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text -” (вложенные теги должны остаться). Конечный результат:
// -text - <a href="#">reprehendunt</a> - text - <mark>nemore</mark> - text -

function replaceText(tag) {
    let [...childNodes] = tag.childNodes;


    childNodes.forEach(node => node.nodeName === '#text' ? node.textContent = '-text - ' : null);

}

replaceText(p);

// 1. Найти в коде список ul и добавить класс “list”
let listItems = document.querySelector('ul')
listItems.classList.add('list');
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let linkAfterUl = document.querySelector('ul ~ a');
linkAfterUl.id = 'link';
// 3. На li через один (начиная с самого первого) установить класс “item”
let oddLi = listItems.querySelectorAll('li:nth-child(odd)');
oddLi.forEach(li => li.classList.add('item'));
// 4. На все ссылки в примере установить класс “custom-link”
let links = document.querySelectorAll('a');
links.forEach(link => link.classList.add('custom-link'));
// Код для задач брать со слайда 4. 



// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
//      <li><a href="#">Link1</a></li>
//      ...
//      <li class=”new-item”>item 5</li>
//      <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
// Код для задач брать со слайда 4. 
let list2 = document.querySelector('ul');

list2.insertAdjacentHTML('beforeend', `
    <li class="new-item"></li>
    <li class="new-item"></li>
`);

list2.querySelectorAll('li').forEach((li, i) => {
    if (li.textContent === '') {
        li.textContent = `item ${i + 1}`;
    }
});

let count = 5;
let countLinks = list2.children.length;
let countAllLinks = countLinks + count;

for (let i = countLinks; i < countAllLinks; i++) {
    const li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `item ${i + 1}`;
    list2.appendChild(li);
}



// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
let linksInUl = list2.querySelectorAll('a');
linksInUl.forEach(link => link.insertAdjacentHTML('afterbegin', `<strong></strong>`));
// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к 
// картинке. Для создания элемента используйте метод createElement.
const img = document.createElement('img');
img.src = `data:image/jpeg;base64,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`;
img.alt = 'Я Дома';
document.body.insertAdjacentElement('afterbegin', img);
// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
mark.classList.add('green');
mark.textContent += " green";
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const [...itemsUlArr] = list2.querySelectorAll('li');
const itemsUlArrReverse = itemsUlArr.reverse();

list2.innerHTML = '';

itemsUlArrReverse.forEach(item => list2.appendChild(item));