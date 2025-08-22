// Определение обработчика
callSomeFunc(); // Uncaught ReferenceError: callSomeFunc is not defined

try{
    callSomeFunc();
    console.log("Конец блока try");
}
catch(error){
    console.log("Возникла ошибка!");
    console.log(error);
}
finally{
    console.log("Блок finally")
}


// Генерация исключения
class Person{
    constructor(name, age){
        if(age < 0) throw "Возраст должен быть положительным";
        this.name = name;
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}

try{
    const alex = new Person("Alex", -123);    // Uncaught Возраст должен быть положительным
    alex.print();
}
catch(error){
    console.log("Произошла ошибка");
    console.log(error);     // Возраст должен быть положительным
}

// Ошибки блока catch
try{
    const alex = new Person("Alex", -123);    // Uncaught Возраст должен быть положительным
    alex.print();
}
catch(error){
    console.log("Произошла ошибка");
    console.log(error);
    console.log(error.message) // сообщение об ошибке
    console.log(error.name) //  тип ошибки
}

// Список конкретных типов ошибок в JS, по умолчанию базовый тип Error
// EvalError: представляет ошибку, которая генерируется при выполнении глобальной функции eval()
// RangeError: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона
// ReferenceError: ошибка генерируется при обращении к несуществующей ссылке
// SyntaxError: представляет ошибку синтаксиса
// TypeError: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке изменить значение, которое нельзя изменять
// URIError: ошибка генерируется при передаче функциям encodeURI() и decodeURI() некорректных значений

class Person{
  
    constructor(pName, pAge){
         
        const age = parseInt(pAge);
        if(isNaN(age))  throw new TypeError("Возраст должен представлять число");
        if(age < 0 || age > 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");
        this.name = pName;
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}

try{
    const alex = new Person("Alex", -123);    
    const vasya = new Person("Vasya", 'hello');    
}
catch(error){   
    if (error instanceof TypeError) {
        console.log("Некорректный тип данных.");
    } else if (error instanceof RangeError) {
        console.log("Недопустимое значение");
    }
    console.log(error.message);
}

// Создание своих типов
class PersonError extends Error {
  constructor(value, ...params) {
    // остальные параметры передаем в конструктор базового класса
    super(...params)
    this.name = "PersonError"
    this.argument = value;
  }
}

try{
    //const tom = new Person("Tom", -45);
    const vasya = new Person("Vasya", "hello");
}
catch(error){   
    if (error instanceof PersonError) {
        console.log("Ошибка типа Person. Некорректное значение:", error.argument);
    }
    console.log(error.message);
}