const btn = document.querySelector('button');
const container = document.querySelector('.container');

// btn.onclick = function () {
//     console.log('click');
// }

btn.addEventListener('click', clickHandler); // устанавливаем слушатель события по клику
// btn.removeEventListener('click', clickHandler); // удаляем этот слушатель события по клику
container.addEventListener('click', removeItem);

function clickHandler(e) {
    e.preventDefault();

    const div = document.createElement('div');
    const button = document.createElement('button');

    div.classList.add('random-number');
    button.classList.add('button');

    div.textContent = +(Math.random() * 10).toFixed();
    button.textContent = 'delete';

    button.dataset.delete = '';

    div.style.cssText = `
        display: flex;
        max-width: 100px;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 10px;
    `;
    button.style.cssText = `
        margin-left: 20px;
        cursor: pointer;
    `;
    container.style.cssText = `
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    `;

    container.insertAdjacentElement('beforeend', div);
    div.insertAdjacentElement('beforeend', button);
}

function removeItem(e) {
    e.preventDefault();

    const target = e.target;

    if (target && target.dataset.delete === '') {
        target.parentElement.remove();
    }
}

// ==============================================================================

// всплытие погружение событий

// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', showAlertMessage);

function showAlertMessage(e) {
    alert(this.dataset.text);
}
// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно
// через добавление класса.

btnMsg.addEventListener("mouseenter", setColor);
btnMsg.addEventListener('mouseleave', removeColor);

function setColor(e) {
    this.style.backgroundColor = 'red';
}

function removeColor(e) {
    this.style.backgroundColor = '';
}

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const tagName = document.getElementById('tag');
document.body.addEventListener('click', setTagName);

function setTagName(e) {
    const tag = e.target.tagName.toString().toLowerCase();
    tagName.textContent = `Tag: ${tag}`;
}

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
const btnGenerate = document.getElementById('btn-generate');

btnGenerate.addEventListener('click', setLi);

function setLi() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `
        Item ${ul.children.length + 1}
    `;
    ul.appendChild(li);
}

// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться 
// блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu 
// должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 
const menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('dropdown-item')) {
        hiddenDropdownMenu();
        showDropdownMenu(target);

    }
});

function hiddenDropdownMenu() {
    const menuItems = menu.querySelectorAll('.dropdown-menu');

    menuItems.forEach(item => item.classList.add('d-none'));
}

function showDropdownMenu(target) {
    target.querySelector('.d-none').classList.remove('d-none');
}