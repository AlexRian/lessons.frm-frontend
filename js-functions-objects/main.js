// передача массива
function printPerson(person) {
    console.log("Name:", person[0]);
    console.log("Age:", person[1]);
    console.log("Email:", person[2]);
}
const person = ["Alex", 31, "alex@example.com"]; 
printPerson(person);


// передача в виде отдеьльных параметров
function printPerson(username, age, email) {
    console.log("Name:", username);
    console.log("Age:", age);
    console.log("Email:", email);
}
 
const personSpread = ["Alex", 31, "alex@example.com"]; 

printPerson(...personSpread);

// значение параметров по умолчанию
function printPerson(username = 'Alex', age = 31, email = 'alex@example.com') {
    console.log("Name:", username);
    console.log("Age:", age);
    console.log("Email:", email);
}

// функции с произвольным количеством параметров
function sum(){
    let result = 0;
    for(const n of arguments)
        result += n;
    console.log(result);
}
sum(6);             // 6
sum(6, 4)           // 10
sum(6, 4, 5)        // 15


// rest оператор
function sum(...numbers){
    let result = 0;
    for(const n of numbers)
        result += n;
    console.log(result);
}
sum(6, 4, 5)     // 15

// rest параметры + обычные параметры
function display(name, ...temps){
    console.log(name);
    for(index in temps){
        console.log(temps[index]);
    }
}
display("Alex", -2, -3, 4, 2, 5);
display("Vasya", 20, 23, 31);

// функция как параметр
function sum(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
function operation(x, y, func){
  
    const result = func(x, y);
    console.log(result);
}

operation(10, 6, sum);  // 16

// return
function returnOne(){
    return 1;
}

function returnMany() {
    return [1, 2, 3, 4];
}

// Стрелочные функции

function hello(){
    console.log("Hello");
}
hello();

const hello = () => console.log("Hello");
hello();


const message = (msg) => msg; 

// если много инструкций
const square = n => {
    const result = n * n;
    console.log(result);
    return result;
}
  
square(5);     // 25
square(6);     // 36


// самозывающаяся функция (IIFE - Immediately Invoked Function Expression)
(function(){
    console.log("Hello");
}());


// Переопределение функций
function print(){
    console.log("Hello Alex");
    print = function(){
        console.log("Hello Vasya");
    }
}
 
print(); // Hello Alex
print(); // Hello Vasya


//Передача параметров по значению и по ссылке
//Строки, числа, логические значения передаются в функцию по значению

function change(x){
    x = 2 * x;
    console.log("x in change:", x);
}
 
let n = 10;
console.log("n before change:", n); // n before change: 10
change(n);                          // x in change: 20
console.log("n after change:", n);  // n after change: 10

//Объекты и массивы представляют ссылочные типы. 
let numbers = [1, 2, 3];

function change(array){
    array[0] = 8; // numbers[0] = 8
}
function changeFull(array){
    array = [9, 8, 7];
}
 
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers);  // [8, 2, 3]


// Объекты

const userContstruct = new Object(); // вызов конструктора
const user = {};


user.name = "Alex";
user.age = 31;

// или при объявлении
// const user = {
//     name: 'Alex',
//     age: 31,
// };


// методы объекта
user.display = function(){
    console.log(user.name);
    console.log(user.age);
};

user.display();

// или при объявлении
const user = {
    name: 'Alex',
    age: 31,
    display: function(){
        console.log(this.name);
        console.log(this.age);
    }
};


// сокращенная запись
// const user = {
//     name: 'Alex',
//     age: 31,
//     display(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// удаление свойств
delete user.name;


//Фукция Object.fromEntries() - создание объекта из набора пар ключ-значение

const personData = [ ["name", "Alex"], ["age", 31]];
const alexPerson = Object.fromEntries(personData);
console.log(alexPerson);        // {name: "Alex", age: 31}
console.log(alexPerson.name);    // Alex

// Комплексные объекты

const country = {
    name: "Германия",
    language: "немецкий",
    capital:{
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};

country.capital.name