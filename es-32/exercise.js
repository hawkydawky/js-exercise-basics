function sayHelloName(_printName) {
    setTimeout(function() {
        console.log("Hello");
        _printName();
    }, 1000);
}

function printName() {
    console.log("John Doe");
}

sayHelloName(printName);