// Date

// текущее время
const currentDate = new Date();
console.log(currentDate);   // Thu Aug 22 2025 14:04:53 GMT+0300

// создание через секунды
const myDate = new Date(1359270000000);
console.log(myDate); // Sun Jan 27 2013 11:00:00 GMT+0400 (Москва, стандартное время)

const date1 = new Date("27 March 2008");
console.log(date1); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)
// или так
const date2 = new Date("3/27/2008");
console.log(date2); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)
// или так
const date3 = new Date("3 27 2008");
console.log(date3); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)

// Либо все через параметры
const myDate = new Date(2012,12,25,18,30,20); 
console.log(myDate); // Tue Dec 25 2012 18:30:20 GMT+0400 (Москва, стандартное время)

// Методы для получения данных

// getDate(): возвращает день месяца

// getDay(): возвращает день недели (отсчет начинается с 0 - воскресенье, и последний день - 6 - суббота)

// getMonth(): возвращает номер месяца (отсчет начинается с нуля, то есть месяц с номер 0 - январь)

// getFullYear(): возвращает год

// toDateString(): возвращает полную дату в виде строки

// getHours(): возвращает час (от 0 до 23)

// getMinutes(): возвращает минуты (от 0 до 59)

// getSeconds(): возвращает секунды (от 0 до 59)

// getMilliseconds(): возвращает миллисекунды (от 0 до 999)

// toTimeString(): возвращает полное время в виде строки

const today = new Date(); 
console.log(today.getDate());       // 22
console.log(today.getDay());        // 5
console.log(today.getMonth());      // 8
console.log(today.getFullYear());   // 2025

// Установка даты и времени
// setDate(): установка дня в дате

// setMonth(): уставовка месяца (отсчет начинается с нуля, то есть месяц с номер 0 - январь)

// setFullYear(): устанавливает год

// setHours(): установка часа

// setMinutes(): установка минут

// setSeconds(): установка секунд

// setMilliseconds(): установка миллисекунд

const myDate = new Date();
myDate.setDate(22);
myDate.setMonth(8)
myDate.setFullYear(2025); 
console.log(myDate); // Tue Aug 22 2025 13:41:20 GMT+0300 (Москва, стандартное время)

// Math

const x = -25;
console.log(Math.abs(x)); // 25  - возвращает абсолютное значение числа:


// возвращают  минимальное и максимальное значение из набора чисел:
const max = Math.max(19, 45); // 45
const min = Math.min(33, 24); // 24

const ceilX = Math.ceil(9.2); // 10 -  округляет число до следующего наибольшего целого числа:

const floorX = Math.floor(9.2); // 9 - округляет число до следующего наименьшего целого числа:

// округляет число до следующего наименьшего целого числа, если его десятичная часть меньше 0.5. Если же десятичная часть равна или больше 0.5, то округление идет до ближайшего наибольшего целого числа
const roundX = Math.round(5.5); // 6
const roundY = Math.round(5.4); // 5

// возвращает случайное число с плавающей точкой их диапазона от 0 до 1
const random = Math.random();

// возвращает число в определенной степени:
const pow = Math.pow(2, 3); // 8

// возвращает квадратный корень числа:
const sqrt = Math.sqrt(121); // 11

const log = Math.log(10); // 2.302585092994046

//Тригонометрические функции
const x = Math.sin(90); // 0.8939966636005579
const y = Math.cos(0); // 1
const z = Math.tan(45); // 1.6197751905438615

const x = Math.asin(0.9); // 1.1197695149986342
const y = Math.acos(1); // 1
const z = Math.atan(1); // 0.7853981633974483


// Math.PI (число PI): 3.141592653589793

// Math.SQRT2 (квадратный корень из двух): 1.4142135623730951

// Math.SQRT1_2 (половина от квадратного корня из двух): 0.7071067811865476

// Math.E (число e или число Эйлера): 2.718281828459045

// Math.LN2 (натуральный логарифм числа 2): 0.6931471805599453

// Math.LN10 (натуральный логарифм числа 10): 2.302585092994046

// Math.LOG2E (двоичный логарифм числа e): 1.4426950408889634

// Math.LOG10E (десятичный логарифм числа e): 0.4342944819032518


// Number

const x = new Number(34); // const x = 34;
const y = new Number('34');
console.log(x+y); // 68


//Свойства

// Number.MAX_VALUE: наибольшее возможное целое число. Приблизительно равно 1.79E+308.
// Number.MIN_VALUE: наименьшее возможное положительное целое число. Приблизительно равно 5e-324
// Number.NaN: специальное значение, которое указывает, что объект не является числом
// Number.NEGATIVE_INFINITY значение, которое обозначает отрицательную бесконечность и которое возникает при переполнении. Например, если мы складываем два отрицательных числа, которые по модулю равны Number.MAX_VALUE.
const x = -1 * Number.MAX_VALUE
const y = -1 * Number.MAX_VALUE
const z = x + y;
if(z===Number.NEGATIVE_INFINITY)
    console.log("отрицательная бесконечность");
else
    console.log(z);


//Number.POSITIVE_INFINITY: положительная бесконечность. Также, как и отрицательная бесконечность, возникает при переполнении, только теперь в положительную сторону:
const x = Number.MAX_VALUE
const y = Number.MAX_VALUE
const z = x * y;
if(z===Number.POSITIVE_INFINITY)
    console.log("положительная бесконечность");
else
    console.log(z);

//преобразует строку в число с плавающей точкой
const a = Number.parseFloat("34.90"); // 34.9

//преобразует строку в целое число
const a = Number.parseInt("34.90"); // 34


// оставляет в числе с плавающей точкой определенное количество знаков в дробной части
const a =  10 / 1.44;
console.log(a); // 6.944444444444445
a = a.toFixed(2); // оставляем два знака после запятой
console.log(a); // 6.94

// Преобразование в другую систему счисления
const num1 = "110";
const num2 = Number.parseInt(num1, 2);
console.log(num2); // 6

// преобразование числа в строку
const num = 10;
console.log(num.toString()); // 10


// Symbol
const alex = Symbol("alex");
console.log(alex);   // Symbol(alex)


const company = { 
    "Alex": "senior",
    "Vasya": "junior",
    "Alex": "junior"
}
for(developer in company) {
    console.log(`${developer} - ${company[developer]}`);
}

//Alex - junior
//Vasya - junior

const company = { 
    [Symbol("Alex")]: "senior",
    [Symbol("Vasya")]: "junior",
    [Symbol("Alex")]: "junior"
}
const developers = Object.getOwnPropertySymbols(company);
for(developer of developers) {
    console.log(`${developer.toString()} - ${company[developer]}`);
}

// Symbol(Alex) - senior
// Symbol(Vasya) - junior
// Symbol(Alex) - junior

//Proxy

// объект, к которому применяется прокси
const target = {name: "Alex"};
// объект, который определяет, как будет переопределяться target
const handler = {};
// объект прокси
const proxy = new Proxy(target, handler);
 
console.log(proxy.name);    // Alex


const target = {name: "Alex", age: 31};
const handler = {
    get: function(target, prop, receiver) {
        return "Alex Smith";
    },
    set: function(target, prop, value) {
        if(prop==="age" && value < 1)
            console.log("Некорректный возраст");
        else
            return target[prop] = value;
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);    // Alex Smith

proxy.age = -199;           // Некорректный возраст