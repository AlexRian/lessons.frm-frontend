// Определение класса
class Person{
    name;
    age;
    work = 'Kept';
}

const alex = new Person();
alex.name = "Alex";
alex.age = 31;

console.log(alex.name);  // Alex
console.log(alex.age);   // 31


// Класс с методами
class Person{
    name;
    age;
    move(place){
        console.log(`Go to ${place}`);
    }
    greet(){
        console.log(`My name ${this.name}`);
    }
}
const alex = new Person();
alex.name = 'Alex'
alex.move("Hospital");
alex.greet();

// Определение конструктора
class Person{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const alex = new Person("alex", 31);
alex.print();    // Name: alex  Age: 31

// Допустимо и такое определение
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}

// Приватные поля и методы
class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    print(){
        console.log(this.#getName);
    }
    #getName(){
        return `Name: ${this.#name}  Age: ${this.#age}`
    }
}
const alex = new Person("Alex", 31);
// alex.#name = "Sam";   // ! Ошибка - нельзя обратиться к приватному полю
// alex.#age = -45;      // ! Ошибка - нельзя обратиться к приватному полю
// alex.#getName() // ! Ошибка - нельзя обратиться к приватному методу
alex.print();    // Name: Alex  Age: 31

// Статические поля
class Person{
    static #message = 'Hello'
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static printInfo(){ 
        console.log("Класс Person представляет человека");
    }
    static printAge(){  console.log(this.age); }    // Ошибка! для статического метода this.age не существует
    static printMessage(){  console.log(this.#message); }
    static print(){
        this.printMessage();
    }
}
Person.printInfo();    // Класс Person представляет человека

// Геттеры и сеттеры
class Person{
    #field;

    set field(value){
        this.#field= value;
    }
    get field(){
        return this.#field;
    }
}

// Наследование
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
} // При наследовании стоит учитывать, что производный класс может обращаться к любой функциональности базового класса, кроме приватных полей и методов.
  
const alex = new Person();
alex.name = "alex"; 
alex.age= 34;

const vasya = new Employee();
vasya.name = "vasya"; 
vasya.age = 36; 
vasya.company = "Kept";

alex.print();    // Name: Alex  Age: 34
vasya.print();    // Name: vasya  Age: 36
vasya.work();     // vasya works in Kept

// Проверка принадлежности объекта классу
console.log(alex instanceof Person); // true