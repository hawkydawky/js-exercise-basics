let primitive = true;

// easier way to do is just that
console.log("variable is a " + typeof(primitive));

//but if we want to use if/else statement

if (typeof(primitive) === "number") {
    console.log("variable is a number");
} else if(typeof(primitive) === "string"){
    console.log("variable is a string");
} else if (typeof(primitive) === "boolean"){
    console.log("variable is a boolean");
} else {
    console.log("variable is not a number, string or booelan");
}