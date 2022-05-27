// {/* <div>
//   <article>
//     <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
//   </article>
// </div>
// <ul>
//   <li><a href="#">Link1</a></li>
//   <li><a href="#">Link2</a></li>
//   <li><a href="#">Link3</a></li>
//   <li><a href="#">Link4</a></li>
// </ul><span></span>
// <a href="#">Some link</a> */}

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
// 3. Найти элемент, который находится перед и после списка ul

// const isParent = (parent, child) => {

//     return parent === child.parentElement;

// };

const isParent = (parent, child) => {
    // Присваеваем родительски єлемент проверяемому єлументу
    let currentParent = child.parentElement;
    // Результат проверки
    let isParent = false;

    // цикл на опредиление родителя
    // Если currentParent существует цикл запускаеться
    while (currentParent) {
        // присваевание результата цикла true/false
        isParent = parent === currentParent;
        
        currentParent = !isParent ? currentParent.parentElement : null;
    }

    return isParent;

};

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));;