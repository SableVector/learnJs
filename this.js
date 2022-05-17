// THIS

let arr = [1, 2, 3, 4, 5];

const multBy = function (array, n) {
    return array.map(item => {
        return item * n;
    });
}

console.log(multBy(arr, 5));

Array.prototype.multBy2 = function (n) {
    return this.map(item => {
        return item * n;
    });
}

console.log(arr.multBy2(10))

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: 3,
    height: 3,
    getSquare: function () {
        return this.width * this.height;
    }
}

console.log(rectangle.getSquare());
// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
const price = {
    price: 10,
    discount: "15%",
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return (100 - parseFloat(this.discount)) * this.price / 100;
    }
}

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
// 	3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
    height: 10,
    heightIncrement: function () {
        return this.height++;
    }
}

console.log(object.height);
console.log(object.heightIncrement());
console.log(object.height);
// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    }
}

console.log(numerator.double().plusOne().minusOne());
console.log(numerator.value);

// 1 Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
const products = {
    priceOneProducts: '12$',
    amoung: 6,
    priceAllProducts: function () {
        return parseFloat(this.priceOneProducts) * this.amoung;
    },
}

console.log(products.priceAllProducts() + '$');
// 2 Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
const details = {
    priceOneProducts: '7$',
    amoung: 11,
}

console.log(products.priceAllProducts.bind(details)());
console.log(products.priceAllProducts.call(details));
console.log(products.priceAllProducts.apply(details));

// 3 Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
let sizes = {
    width: 5,
    height: 11
}

getSquare = function () {
    return this.width * this.height;
}

result = getSquare.apply(sizes);
console.log(result);
// 4.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
}
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight())