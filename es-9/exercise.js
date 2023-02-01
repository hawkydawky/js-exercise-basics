const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname  //false
age <= average  //true
firstYearCompleted == lastname  //false
yearsCompleted == firstYearCompleted  //true
firstYearCompleted === yearsCompleted  //false
examsCompleted < age  //true
isGraduated > yearsCompleted  //false

console.log(name == lastname)  //predicted correct
console.log(age <= average)  //predicted correct
console.log(firstYearCompleted == lastname)  //predicted correct
console.log(yearsCompleted == firstYearCompleted)  //predicted correct
console.log(firstYearCompleted === yearsCompleted)  //predicted correct
console.log(examsCompleted < age)  //predicted correct
console.log(isGraduated > yearsCompleted)  //predicted correct