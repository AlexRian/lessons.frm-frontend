// Hello world!
console.log('Hello world');

// Переменные
const constantVariable = 1;
let chageableVariable; // undefined
var anotherChageableVariable; // undefined

// Типы данных

// // Number
// const numberIntVariable = 45; // От -2^53 до 2^53 как целые так и дробные
// const numberFloatVariable = 45.45; // От -2^53 до 2^53 как целые так и дробные

// const numberBinary = 0b1011;  // в двоичной
// console.log(numberBinary)

// const numberHex = 0xff; // в шестнадцатеричной 
// console.log(numberHex)

// // BigInt
// const numberBigIntVariable = 9007199254740991; // Очень большие числа

// // Boolean
// const booleanVariable = true;

// // String
// const stringVariable = 'Hello';
// const formattedString = `${stringVariable} world`;
// console.log(formattedString)

// // object
// const objectVariable = {
//     name: 'Hello'
// }

// // Null и undefined
// let undefVariable; // undefined
// console.log(undefVariable);

// undefVariable = null; // null
// console.log(undefVariable)


// // Слабая/динамическая типизация
// let id;  // тип undefined
// console.log(id);

// id = 45;  // тип number
// console.log(id);

// id = "45"; // тип string
// console.log(id);

// // Узнать тип
// typeof id;

// console.log('Hello' + 10)

// Арифметика

// const a = 50 + 50;
// const b = 50 - 30;
// const c = 50 * 10;
// const d = 50 / 10;
// const e = 50 % 4; // деление по модулю
// const f = 2 ** 4; // возведение в степень

// // префиксный инкремент
// let x = 5;
// let z = ++x;
// console.log(x); // 6
// console.log(z); // 6
     
// // постфиксный инкремент
// let y = 5;
// let o = y++;
// console.log(y); // 6
// console.log(o); // 5

// // Все операции выше можно комбинировать с присвоением
// y += 1;


// Условные операторы
// let valueForCheck = 10;

// if(valueForCheck === 10){
//     console.log('Equal')
// } else if(valueForCheck < 10){
//     console.log('Lower')
// }else{
//     console.log('All wrong')
// }

// valueForCheck = 5;
// let condition = true

// if(valueForCheck !== 10 && condition){ // логическое и
//     console.log('Tested')
// }

// if(valueForCheck !== 10 || condition){ // логическое или
//     console.log('Tested')
// }

// const test = 200;
// switch(test){
//     case 100: 
//         console.log('test равен 100');
//         break;
//     case 200: 
//         console.log('test равен 200');
//         break;
//     case 500: 
//         console.log('test равен 500');
//         break;
//     default: 
//         console.log('Такого значения нет');
//         break;
// }

// const isAlive = true;
// const isDead = !isAlive; // Логическое отрицание
// console.log(isDead);     // false

// // Тернарная операция
// const numberOne = 1;
// const numberTwo = 2;
// const result = numberOne < numberTwo ? numberOne: numberTwo;
// console.log(result); // 1

// // Преобразования данных

// const numberInt = 56;
// const convertStringResult = String(numberInt); // число в строку
// console.log(convertStringResult); // '56'

// const numberString = '56';
// const convertIntResult = Number(numberString);
// console.log(convertIntResult); // 56

// const numberFloat = '56.04';
// const convertFloatResult = Number(numberFloat);
// console.log(convertFloatResult); // 56.04

// const numberImpossibleString = 'xyz';
// const convertNanResult = Number(numberImpossibleString);
// console.log(convertNanResult); // NaN

// Массивы
// const arr = [0, 1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[10]); //undefined

// Циклы
// for(let i = 0; i < 5; i++){ // [инициализация счетчика]; [условие]; [изменение счетчика]
//     console.log(i);
// }

// for(let i = 1, j=1; i < 5, j < 4; i++, j++){     
//     console.log(i + j);
// }

// let i = 1;
// while(i <= 5){ // break и continue так же поддерживаются
//     console.log(i);
//     i++;
// }

// Функции
// function hello(){
//     console.log('Hello!');
// }

// let message = hello;
// message();

// let greetings = function(name){ // Функции-выражения и анонимные функции
//     console.log(`Hello ${name}`);
// }

// greetings('Alex');
