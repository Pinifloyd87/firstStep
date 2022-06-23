///Числа

const num =15;//integer
const float = 42.2;//float
const pow= 10e3;///возведение в степень 10в 3ей


console.log(pow);
console.log('maxSafeInteger',Number.MAX_SAFE_INTEGER);

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(45));
const Numm = '40';
console.log(Numm+2);// строка с числом выводит 402
console.log(parseInt(Numm)+2);// командой ParseInt из строки сделали число
console.log(+Numm+2);// + в начале делает также строку числом

console.log(0.4+0.2);//должно получиться 0,6, но выходит 0.6000000000000001
console.log(+(0.4+ 0.2).toFixed(1));//+ дал нам не строку,а число.toFixed определило количество знаков после запятой.итог 0,6


// BigInt

console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof(9007199254740991n));
console.log(parseInt(5n)+6);


///***Math */

console.log(Math.PI);
console.log(Math.sqrt(9));//корень квадратный
console.log(Math.pow(3,3));//возведение в степень 
console.log(Math.max(5, 6, 9));//выводит макс.число
console.log(Math.min(5, 6, 9));
console.log(Math.floor(5.7));//округляет в меньшую сторону= 5
console.log(Math.ceil(5.2));//округляет в большую сторону= 6
console.log(Math.random());//рандомное число


