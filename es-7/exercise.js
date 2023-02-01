let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello);     //The string 'ciao' is "Not a Number". So we cannot change or force its type to a number. 
                        //We can convert the type of a string to a number if the string contains only numbers.
console.log(age);
console.log(isGraduated);