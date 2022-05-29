const elem = document.querySelector('div');
// Работа с классами в DOM

elem.classList // Получает перечень классов у єлемента
elem.classList.add('name-class-1', 'name-class-2'); // Добавляет классы в элемент
elem.classList.remove('name-class-1'); // Удаляет классы у элемент
elem.classList.toggle('name-class-1'); // Проверяет наличие, удаляет/добавлят класс в зависимости от наличия
elem.classList.contains('name-class-1'); // Проверяет наличие класа у єлемента
elem.className // возвращает перечень классов в виде строки

// Работа с атрибутами в DOM

elem.setAttribute('a', 'b'); // установка атрибута. Где а - название атрибута b - свойство атрибута
elem.getAttribute('a'); // получение свойста атрибута
elem.hasAttribute('a'); // проверяет наличие атрибута
elem.removeAttribute('a'); // удаление атрибута
elem.dataset // Получения списка атрибутов data-
elem.dataset.a; // Получение дата атрибута где а - название атрибута
elem.dataset.a = 'name'; // Назначение атрибута где а - название атрибута