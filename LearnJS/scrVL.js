//***Переменные***

const myName = " Kirill";//string
const secondName = ' Grishkov';
let age = 34;//number
age = 25;

const _isProgrammer = true;//boolean

console.log(myName);
console.log(age);
console.log(myName+ secondName+ age);

//***Мутирование***

console.log('Имя этого замечательного человека-'+ myName+ secondName, 'а его возраст '+ age);

//const myName1= prompt(' Введите имя', '');
//const mysecName1= prompt('  Введите фамилию ' , ' ');

// alert(myName1+ secondName );


///***Операторы***

let currentYear = 2022;
const birthYear= 1987;

const myAge = currentYear - birthYear;
console.log(myAge);
console.log( ++currentYear);//плюсы в начале добавляют +1. Если бы стояли после, то вывелись только со следующим consol.log

const a =5;
const b =10;
let c = 32;
c = c + a;
console.log(c);


//***Типы данных */

const iAmMen = true;
const myName2 = 'Kirill';
const myOwnAge = 34;
console.log( typeof iAmMen, typeof myName2, typeof myOwnAge);

// ***Приоритет операторов***

const fullAge = 34;
const thisYear =2022;
const myBirthYear = 1987;

const isFullAge = thisYear - myBirthYear< fullAge;
console.log(isFullAge);


//***Условные операторы */

const courseStatus = 'pending'; //ready, fail, pending//
if(courseStatus=== 'ready') {
  console.log('Курс готов, идите учитесь');
}
if(courseStatus=== 'pending') {
  console.log('Курс не готов, ожидайте');
}
if(courseStatus=== 'fail') {
  console.log('Ничего не будет');
}

// Перепишем с оператором else

const courseStatus2 = 'fail'; //ready, fail, pending//
if(courseStatus2=== 'ready') {
  console.log('Курс готов, идите учитесь');
}
else if(courseStatus2==='pending') 
{
    console.log('Курс не готов, ожидайте');
   }
else { 
    console.log('Ничего не будет');
  }

  ///Обьяснение 3х равно ===
const num1 =7;
const num2 ='7';

console.log(num1=== num2);//2 знака равно проверяет по значению.3 - по типу данных

const isReady = true;
if (isReady === true){
  console.log('Vse ok')
}

// ***Булевая логика***///

// ***Функции***

function calculateAge (year){
  return 2022 - year;
}
const myAGE= calculateAge (1987);
console.log(myAGE);


     
function calculateAge (year){
  return 2022 - year;
}
function infoAboutMen (Myname, year){
  const age1 = calculateAge(year);
  if(age1>30){
console.log('Прекрасный '+ Myname + ' живет на земле уже '+ age1+ ' года');}
else{
  console.log('Еще щегол');
}
}
infoAboutMen( Myname = 'Кирилл', year= 1987);


// ***МАссивы***

const cars =['Geely', 'Ford', 'Skoda'];
console.log(cars[2]);//выводит 3 эл-т массива
// В массиве можно менять названия эл-ов
cars[1]= 'Audi';
console.log(cars);
cars[3]= 'JAC';//добавляет еще один эл-т в конец
console.log(cars);


//***Циклы */

const myCars =['Geely', 'Ford', 'Skoda'];
for(let car of myCars){
  console.log(car);
}

// **Обьекты***

const person= {
  myFirstName: 'Kirill',
  mySecondName: 'Grishkov',
  myYear: 1987,
  languages:['Rus', 'Bel', 'Eng', 'Fr' ],
  hasWife: true
};
console.log(person.hasWife);//Можно обращаться через точку
const lang= 'languages';//ввели новую переменную
console.log(person[lang]);//обратились к ней через массив
const i= 'myYear';
console.log(person.i);
person.loh= false;
console.log(person.loh);
delete person.loh;
console.log(person.myFirstName+ person.mySecondName);
// let vozrast = 34;
// let tekGod = {
//   [vozrast + myYear]: 5
// };