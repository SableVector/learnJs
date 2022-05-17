// NUBMER
const numberLesson = () => {
    let value;
    // 1. Получить число pi из Math и округлить его до 2-х знаков после точки
    value = +Math.PI.toFixed(2);
    console.log(value);
    console.log(typeof value);

    // 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
    value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
    console.log(value);
    value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
    console.log(value);

    // 3. Работа с Math.random:
    //	 a. Получить случайное число и округлить его до двух цифр после запятой
    //	 b. Получить случайное целое число от 0 до X. X - любое произвольное число.
    value = +Math.random().toFixed(2);
    console.log(value);
    value = Math.ceil(Math.random() * 100 + 1)
    console.log(value);

    // 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
    value = 0.6 + 0.7
    console.log(value);
    value = +value.toFixed(1);
    console.log(value);
    value = (0.6 * 10 + 0.8 * 10) / 10;
    console.log(value);

    // 5. Получить число из строки ‘100$’
    value = "100.4$";
    console.log(value);
    value = parseFloat(value);
    console.log(value);
    value = Math.SQRT2;
    console.log(value);

}

export default numberLesson;