'use strict';

/*1. Дана строка 'azza aca aea abba adca abea'. Напишите регулярку, которая найдет строки
abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'.*/

const string = 'azza aca aea abba adca abea';

const regExp = /a[b-e]{2}a/g; // 'регулярку, которая найдет строки abba adca abea'
const result = string.match(regExp);

const regExpVar2 = /a..a/g; //'по шаблону: буква 'a', 2 любых символа, буква 'a''
const resultVar2 = string.match(regExpVar2);

console.log('string = ', string);
console.log('result = ', result);
console.log('resultVar2 = ', resultVar2);

/*2. Дана строка 'azza acxca azxza wwxwwa'. Напишите регулярку,
которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.
Между буквами a может быть любой символ (кроме a).*/

const string2 = 'azza acxca azxza wwxwwa';
const regExp2 = /\ba[^a]+a\b/g;
const newString = string2.replace(regExp2, (match) => '!'); //variant 1

console.log('string2 = ', string2);
console.log('newString = ', newString);