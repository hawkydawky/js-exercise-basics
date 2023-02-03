function sayHelloName(_printName) {
    console.log("Hello");
    _printName();
}

function printName() {
    console.log("John Doe");
}

sayHelloName(printName);