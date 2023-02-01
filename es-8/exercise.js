let varTrue = true;

console.log('unmodified --- **value: ' + varTrue + " **data type: " + typeof (varTrue));

//
varTrue = Number(varTrue);
console.log('numeric --- **value: ' + varTrue + " **data type: " + typeof (varTrue));

//
varTrue = String(varTrue);
console.log('string --- **value: ' + varTrue + " **data type: " + typeof (varTrue));

//
varTrue = Boolean(varTrue);
console.log('boolean --- **value: ' + varTrue + " **data type: " + typeof (varTrue));