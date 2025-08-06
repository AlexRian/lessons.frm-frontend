//В отличие от примитивных типов данные объектов копируются по ссылке. 

const alex = { name: "Alex"};
const vasya = alex;
// проверяем свойство name у обоих констант
console.log(alex.name);  // Alex
console.log(vasya.name);  // Alex
         
// меняем свойство name у константы vasya
vasya.name = "Vasya";
// повторно проверяем свойство name у обоих констант
console.log("После изменения")
console.log(alex.name);  // Vasya
console.log(vasya.name);  // Vasya

// Object.assign

const alexAssign = { name: "Alex", age: 37};
const vasyaAssign = Object.assign({}, alexAssign);
vasyaAssign.name = "vasya";
vasyaAssign.age = 41;
         
console.log(`Объект alex. Name: ${alexAssign.name}   Age: ${alexAssign.age}`); // Alex 37
console.log(`Объект vasya. Name: ${vasyaAssign.name}   Age: ${vasyaAssign.age}`); // Vasya 41

// Если несколько объектов

const tom = { name: "Tom"};
const sam = { age: 37};
const person = { height: 170};
Object.assign(person, tom, sam);    // копируем из tom и sam в person
console.log(person);    // {height: 170, name: "Tom", age: 37}

// Копирование объекта с помощью spread-оператора
const spreadTom = { name: "spreadTom", age: 37, company: "Kept"};
const spreadBob = {...spreadTom}
spreadBob.name = "spreadBob";
          
console.log(spreadTom);   // {name: "spreadTom", age: 37, company: "Kept"}
console.log(spreadBob);   // {name: "spreadBob", age: 37, company: "Kept"}


// Сравнение объектов
const difNamesTom = { name: "Tom"};
const diffNamesBob = { name: "Bob"};
console.log(difNamesTom == diffNamesBob);    // false
console.log(difNamesTom === diffNamesBob);   // false

const equalNamesTom = { name: "Tom"};
const equalNamesBob = { name: "Tom"};
console.log(equalNamesTom == equalNamesBob);    // false
console.log(equalNamesTom === equalNamesBob);   // false

const equealTom = { name: "Tom"};
const equealBob = equealTom;
console.log(equealTom == equealBob);    // true
console.log(equealTom === equealBob);   // true

//Проверка наличия и перебор методов и свойств

const user = {};
user.name = "Alex";

const hasNameProp = "name" in user;
console.log(hasNameProp); // true - свойство name есть в user

// hasOwnProperty()
const hasNameProperty = user.hasOwnProperty("name");
console.log(hasNameProperty); // true

//Перебор свойств
const alexUser = {
    name: "Alex",
    age: 31,
};

for(const key in alexUser) {
    console.log(key, " : ", alexUser[key]);
}

// Object.entries() - массив где пара свойств-значение
for(const key of Object.entries(alexUser)) {
    console.log(key);

    // ["name", "Alex"]
    // ["age", 31]
}

// Object.keys() - массив всех свойств
console.log(Object.keys(alexUser)); // ["name", "age"]

// Object.values() - возвращает массив, который содержит все значения свойств объекта
console.log(Object.values(alexUser)); // ["Alex", "31"]

//Объект как результат функции
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        print: function() {
            console.log(`Name: ${this.name}  Age: ${this.age}`);
        }
    };
};

const tomUser = createUser("Tom", 26);
tomUser.print();
const aliceUser = createUser("Alice", 24);
aliceUser.print();

// Функции-конструкторы объектов
// определение конструктора объектов типа Person
function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    };
}
// определение объекта типа Person
const tomPerson = new Person("Tom", 39);
// обращение к свойству объекта
console.log(tomPerson.name); // Том
// обращение к методу объекта
tomPerson.print();    // Name: Tom  Age: 39

console.log(tomPerson instanceof Person);  // true - tom является объектом типа Person

// получаем прототип
console.log(Person.prototype); // {constructor: ƒ}
console.log(tomPerson.__proto__); // constructor : ƒ Person(name, age)
console.log(Object.getPrototypeOf(tomPerson)); // [[Prototype]] : Object

// Объект Function
const square = new Function("n", "return n * n;");
console.log(square(5));     // 25

function sayHello(){
    console.log("Hello");
}
// изменяем прототип для всех функций
Function.prototype.program ="Hello World";
 
console.log(sayHello.program); // Hello World

// Метод call
function sum(x, y){
    return x + y;
}

const resultCall = sum.call(this, 3, 8);
 
console.log(result); // 11

// Метод apply()
const resultApply = sum.apply(null, [3, 8]);

//Наследование прототипов
const prototypePerson = {
    name: "", 
    age: 0,  
    print: function(){ 
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};
 
const employee = Object.create(prototypePerson);  // employee использует прототип объекта prototypePerson
 
// получаем прототип
console.log(employee.__proto__);     // {name: "", age: 0, print: ƒ}
 
employee.name = "Alex";
employee.age = 39;
employee.company = "Kept";  // новое свойство
employee.work = function(){ 
    console.log(`${this.name} works in ${this.company}`);
}
employee.print();    // Name: Alex  Age: 39
employee.work();    // Alex works in Kept
// переопределяем метод print
employee.print = function(){
    this.__proto__.print.call(this);    // вызываем версию метода из prototypePerson
    // Object.getPrototypeOf(this).print.call(this);  // альтернативный вариант
    console.log(`Company: ${this.company}`);
}
 

// Через конструктор
// конструктор пользователя
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Person ${this.name} says "Hello"`);
    };
}
// добавляем прототип в функцию
Person.prototype.print = function(){
    console.log(`Name: ${this.name}  Age: ${this.age}`);
};
 
 
// конструктор работника
function Employee(name, age, comp){
    Person.call(this, name, age);         // применяем конструктор Person
    this.company = comp;
    this.work = function(){
        console.log(`${this.name}  works in ${this.company}`);
    };
}
// наследуем прототип от Person
Employee.prototype = Object.create(Person.prototype);
// устанавливаем конструктор 
Employee.prototype.constructor = Employee;


//Деструктуризация объектов
const destructUser = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
let {name, email} = destructUser;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com

let tomSpread = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
let {name, age, ...contacts} = tom;
console.log(name);      // Tom
console.log(age);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}

//Деструктуризация массивов
let users = ["Tom", "Sam", "Bob"];
let [a, b, c] = users;
 
console.log(a);     // Tom
console.log(b);     // Sam
console.log(c);     // Bob

//Получение оставшихся элементов массива в другой массив
let users = ["Tom", "Sam", "Bob", "Mike"];
let [tom, ...others] = users;
  
console.log(tom);       // Tom
console.log(others);    // ["Sam", "Bob", "Mike"]

//Пропуск элементов
let users = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
let [first, , , ,fifth] = users;
 
console.log(first);     // Tom
console.log(fifth);     // Alice

//Обмен значениями
let first = "Tom";
let second = "Bob";
[first, second] = [second, first];
  
console.log(first);     // Bob
console.log(second);    // Tom

//Оператор ?
let tom = null;
let bob = {name: "Bob"};
 
function printName(person){
    console.log(person?.name);
}
printName(tom); // undefined
printName(bob); // Bob

//Константные объекты. Запрет изменения объекта
const tom = {name: "Tom"};
Object.preventExtensions(tom);  // запрещаем расширение объекта tom
tom.company = "Localhost";  // пытаемся добавить в объект tom новое свойство
console.log(`Name: ${tom.name}  Company: ${tom.company}`); // Name: Tom  Company: undefined


//Object.isExtensible(). В этот метод передается тестируемый объект. И если объект поддерживает расширение, то метод возвращает true, иначе возвращается false
const tom = {name: "Tom"};
console.log(Object.isExtensible(tom));  // true
Object.preventExtensions(tom);  // запрещаем расширение объекта tom
console.log(Object.isExtensible(tom));  // false

//Закрытие объектов
Object.seal(tom); // Object.isSealed()
// Закрытие или "запечатывание" объектов (sealing) также позволяет запретить расширение объектов. Но кроме того, также запрещает настройку уже существующих свойств. Для закрытия объектов применяется метод Object.seal().

Object.freeze() // значение свойства нельзя изменить