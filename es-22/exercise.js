let primitive = true;

// easier way to do is just that
console.log("variable is a " + typeof(primitive));

//but if we want to use switch statement

switch (typeof(primitive)) {
    case "number":
        console.log("variable is a number");
        break;

    case "string":
        console.log("variable is a string");
        break;

    case "boolean":
        console.log("variable is a boolean");
        break;

    default:
        console.log("variable is not a number, string or booelan");
        break;
}