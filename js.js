// let hello = "Привет, мир!";
// console.log(hello.toLocaleUpperCase()); //метод для строки

// let hello = "Привет, мир!";
// console.log(hello.toLocaleUpperCase); //функция toLocaleUpperCase

// let n = 12.345; //методы для чисел

// console.log( n.toFixed(2) ); //"12.35"
// console.log( n.toFixed(0) ); //"12"
// console.log( n.toFixed(5) ); //"12.34500"
// console.log( 12.34.toFixed(1) ); //12.3
// console.log( 12.toFixed(1) ); //ошибка!
// console.log( 12..toFixed(1) ); //12.0


// console.log( 0xFF); //255 (FF)в 16-ной системе

// console.log( 3e5); //3 (e5)00000
// console.log( 3e-5); //0.0000(e-5)3

// console.log( 1 / 0); // Infinity
// console.log( 123 / 0); // Infinity

// console.log( Infinity > 1234567890 ); //true
// console.log( Infinity + 5 == Infinity ); //true

// let x = Infinity; //можем задавать в переменную

// console.log( -1 / 0 ); // -Infinity
// console.log( 1e900); // Infinity - слишком большое число


// console.log( 0 / 0); //NaN

// let n = 0 / 0;
// console.log(isNaN(n) ); //true

// console.log( isNan("123") ); //false, строка преобразовалась к обычному числу 123

// console.log( NaN + 1); //NaN

// console.log( isFinite(1) ); //true isFinite - Проверка конечное число или нет
// console.log( isFinite(Infinity) ); //fasle
// console.log( isFinite(NaN) ); //false

// let s = "12.345"; 
// console.log( +s ); //12.345 - преобразовывает s в число

// //преобразования
// console.log( +"123test" ); //NaN
// console.log( +"  -123" ); // -123
// console.log( +"\n34 \n" ); //34, перевод строки \n является пробельным символом
// console.log( +"" ); //0, пустая строка становится нулём
// console.log( +"1 2" ); // NaN, пробел посредине числа - ошибка
// console.log( '12.34' / "-2" ); // -6.17 - работает с любыми скобками

// console.log( +"12px" ); //NaN
// console.log( parseInt('12px') );// 12 - явное преобразование целых чисел
// console.log( parseInt('a12px') );// NaN - увидит первую букву и остановится
// console.log( parseFloat('12.3px') ) // 12.3 преобразование делится пошагово

// console.log( parseInt('FF', 16) );// 255

// console.log( parseInt('01', 2) );// 1
// 00 = 0
// 01 = 1
// 10 = 2
// 11 = 3
// 100 = 4
// 101 = 5
// 110 = 6
// 111 = 7
// 1000 = 8

// console.log( parseInt('1000', 3) );// 27

// Проверка на число

// let x = prompt("enter" , "-123.45");

// if (isNaN(x) && x > 0) {
//     console.log( "NaN. Не число");
// } else {
//     console.log ("Число");
// }

// console.log( isNaN(null) ); // false - не NaN, т.е. "число"
// console.log( isNaN("\n \n") ); // false - не NaN, т.е. "число"

// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n); //проверка не дробное число и окончательное
// } //возращает true или false

// let n = 255;
// console.log( n.toString(16) ); // ff

// let m = 1234567890;
// console.log(m.toString(36) ); //kf12oi

// console.log( Math.floor(3.1)); //3, округление в меньшую сторону
// console.log( Math.ceil(3.1)); //4, округление в большую сторону
// console.log( Math.round(3.1)); //3, округление автоматически по правилам математики

// console.log( ~~12.9); //12, обрезает всё после запятой

// console.log( 12.3 ^ 0); //12
// console.log (1.2 + 1.3 ^ 0); //2, приоритет ^ меньше, чем +

// console.log( 0.1 + 0.2 > 0.3); // true т.к. в js 0.2 -это 0.2000...1
// console.log( (0.1*10 + 0.2*10) / 10 > 0.3); // fasle, т.к убрали десятичные

// let str = "jQuery";
// console.log(str.charAt(1) ); //Q

// str = "Людина!";
// console.log( str[0] ); // "Л"
// console.log( str[2] + str[3] + str[5]); //диа
// console.log( "Людина"[3].toLocaleUpperCase()); //И будет с большой буквы

// let str = "людина - кодер";
// console.log( str.indexOf("людина") ); //0 - индекс 0
// console.log( str.indexOf("Людина") ); //-1 - не найдено, т.к. учёт регистра
// console.log( str.indexOf("д", 2) ); //2. т.к начинаем поиск с 2 символа и буква д вторая

// //Вызов ~n эквивалент выражению -(n+1)
// console.log( ~2 ); // - (2+1) = -3
// console.log( ~1 ); // - (1+1) = -2
// console.log( ~0 ); // - (0+1) = -1
// console.log( ~-1 ); // - (-1+1) = 0

// let str = "людина - кодер";
// if (~str.indexOf("юдин")) { //'~' - "не минус один", а " if ~str.index.Of" - если не найдено"
//     console.log( 'совпадение есть');
// }

// let str = "людина кодер - прекрасний пише код, бо кодерство - це сила людства"; // ищем в этой строке
// let target = "код";

// let pos = -1;
// while ((pos = str.indexOf(target, pos+1)) != -1) { //ищем таргет код + с -1 индекса
//     console.log( pos ); //7, 31 , 39 - нашло все таргеты (код)
// }

// let str = "людина - кодер";

// console.log(str.substring(2)); //символы с позици 2 до конца дина - кодер
// console.log(str.substring(2, 4)); //символы с позици 3 до 4 "ди"
// console.log("людина".substring(-2)); //-2 становится 0 "людина"
// console.log("людина".substring(4, 2)); // "ди" 
// // если 4>2, аргументы меняются местами -> substring(2, 4)

// let str = "людина - кодер";

// console.log( str.slice(-9)) ; //от 9 позиции с конца "а - кодер"
// console.log( str.slice(1, -1)) ; //от 2 позиции до -1 с конца "юдина - коде"
// console.log( "кодер".slice(1, -1)) ; //от 2 позиции до -1 с конца "оде"

// console.log( 'a' > 'A'); //true нижний регистр больше по значению чем верхний

// let obj = new Object(); // создание объекта через конструктор
// let obj = {}; // создание объекта оба варианта равносильные

// let person = {} // пустой объект
// person.name = 'Serge';// добавляем имя
// person.age = 32;//добавляем возраст
// console.log( person.name + ': ' + person.age ); //Serge: 32
// delete person.age; //удаляем с объекта age
// console.log(person); //name: Serge

// let obj = {};
// obj.test = undefined;
// console.log ("test" in obj ); //true проверяем наличие в объекте
// console.log ("person" in obj ); //false проверяем наличие в объекте

// let person = {
//     name: "Serge",
//     'улюблений стиль музики': 'Hard rock' //ключ из нескольких слов в скобках
// };
// person.любимая марка авто = 'BMW'; //ошибка, через такой способ нельзя добавить ключ из нескольких слов
// person['person.любимая марка авто'] = 'BMW'; // так можно добавить

// let person = {};
// person.age = 25;
// let key = 'age';
// console.log( person[key]) ; // выведет 25

// let user = {
//     name: "Yura",
//     age: 38,
//     about: {
//         food: "meat",
//         music: "vocal deep house",
//         football: true
//     },
//     drink: "water"
// };

// console.log(user.name);
// console.log(user.about.music);

// for(let key in user) {
//     console.log("Ключ: " + key + ", значение: " + user[key]);
// }

// let count = 0;
// for(let key in user) {
//     count++;
// }
// console.log(count); //количество свойств 

// console.log( "Всего свойств: " + count); //4
// console.log(Object.keys(user).length); //равносильно = console.log( "Всего свойств: " + count);


// let user = {
//     name: "Serge",
//     age:30
// };

// let admin = user;
// let years = user;
// admin.name = "Misha"; //поменяли данные через admin
// years.age = "32"; //поменяли данные через years
// console.log(user); //name:Misha, age:32;


// let clone = {}; //новый пустой объект

// for(let key in user) {
//     clone[key] = user[key]; //копируем все свойства юзера
// }

//Метод arr.forEach(callback[, thisArg])
// forEach вызывает функцию и передаёт 3 парамметра
// item - элемент
// i - номер
// arr - массив

// let user = ["Ivan", "Serg", "Yura", "Misha"];

// user.forEach(function(item, i, arr){
//     console.log(i, item, arr);
// });

// let num = [1, 2, 3, 4];

// let getnum = num.filter(function(number){
//     return number > 2; 
// });

// console.log(getnum);

// let users = ["Ivan", "Serg", "Yura", "Misha"];

// let usersLengths = users.map(function(name){
//     return name.length;
// })

// console.log(usersLengths); //4, 4, 4, 5





