	// STRING
	const string = 'some test string';
	let str;
	// 1. Получить первую и последнюю буквы строки
	str = string.slice(0, 1) + string.slice(-1, string.length);
	str = string[0];
	console.log(str);
	str = string[string.length - 1];
	console.log(str);
	// 2. Сделать первую и последнюю буквы в верхнем регистре
	str = string[0].toUpperCase() + string[string.length - 1].toUpperCase();
	console.log(str);
	str = string.replace(string[0], string[0].toUpperCase());
	str = str.replace(str[str.length - 1], str[str.length - 1].toUpperCase());
	console.log(str);
	// 3. Найти положение слова ‘string’ в строке
	str = string.indexOf('string');
	console.log(str);
	// 4. Найти положение второго пробела (“вручную” ничего не считать)
	str = string.lastIndexOf(' ')
	console.log(str);
	// 5. Получить строку с 5-го символа длиной 4 буквы
	str = string.slice(5, 10);
	console.log(str);
	// 6. Получить строку с 5-го по 9-й символы
	str = string.slice(5, 9);
	console.log(str);
	// 7. Получить новую строку из исходной путем удаления последних 6-и символов
	// (то есть исходная строка без последних 6и символов)
	str = string.slice(0, -6);
	console.log(str);
	// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
	// содержаться текст “2016”
	const a = 20;
	const b = 16;
	str = a.toString() + b.toString();
	console.log(str);