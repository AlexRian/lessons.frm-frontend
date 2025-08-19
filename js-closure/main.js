//Область видимости переменных


//Глобальные переменные
var a = 5;
let b = 8;
const c = 9;

{
    var a = 5; // var определяет локальные переменные уровня функции
    let b = 8; // let определяет локальные переменные уровня блока кода
    const c = 9;
}

function print(){
 
    var a = 5;
    let b = 8;
    const c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
print();
console.log("Global: a =", a);  // Uncaught ReferenceError: a is not defined

//Переменная, объявленная с помощью var, может использоваться вне блока:

// безымянный блок
{
    var a = 5;
    let y = 5;
}
console.log("a =", a);  // a = 5
console.log("y =", y);  // Uncaught ReferenceError: y is not defined


//блок кода должен срабатывать, чтобы инициализировать переменную
if(false){
    var z = 6;
}
console.log("z =", z);  // z = undefined

//Скрытие переменных

var z = 89;
function print(){
 
    var z = 10; // Будет использоваться эта переменная
    console.log(z); // 10
}
print(); // 10


// C помощью оператора var мы не можем определить одновременно две переменных с одним и тем же именем и в функции
function displayZ(){
  
    var z = 20;
     
    {
        var z = 30; // Не определяет новую переменную, а изменяет значение переменной z уровня функции
        console.log("Block:", z);
    }
    console.log("Function:", z);
}
displayZ();
// Block: 30
// Function: 30

///Скрытие переменной let
let i = 10;
function displayZ(){
  
    let i = 20;
     
    {
        let i = 30;
        console.log("Block:", i);
    }
     
    console.log("Function:", i);
}
 
displayZ();
console.log("Global:", i);
// Block: 30
// Function: 20
// Global: 10


// При определении переменных в JavaScript мы можем не использовать ключевое слово let или var.
function setAge(){
    userage = 39;
}
setAge();
console.log(userage);   // 39, Однако если мы не вызовем функцию, переменная будет не определена:

//strict mode
"use strict";       // используем строгий режим

username = "Alex";   // Uncaught ReferenceError: username is not defined
console.log(username);


//Замыкание 
function counter(){
    let x = 0;
    function increase(){
        x++;
        console.log(x);
    };
    return increase;
}
const testCounterOne = counter();
const testCounterTwo = counter();
testCounterOne();   // 1
testCounterTwo(); // 1
testCounterOne();   // 2
testCounterTwo(); // 2
testCounterOne();   // 3

// Замыкания и ООП
function user(name, age){
    console.log("Person", name, "created");
 
    function print(){
         console.log("Person ", name, " (" +age +")");
    }
    function work(){
         console.log("Person ", name, " works");
    }
    function incrementAge(value){
        age = age + value;
    }
    return [print, work, incrementAge];
}
 
const alex = user("alex", 31);
alex[0]();       // Person  alex  (31)
alex[1]();       // Person  alex  works
alex[2](1);      // incrementAge
alex[0]();       // Person  alex  (32)

//Hoisting

console.log(test); // Ошибка - ReferenceError: foo is not defined

//Добавил объявление
console.log(test);   // undefined
var test = "Value";

// В случае с let
console.log(testLet);   // Uncaught ReferenceError: Cannot access 'testLet' before initialization
let testLet = "Value";
console.log(testLet);   // не будет выполняться