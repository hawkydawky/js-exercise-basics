function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let samsung = new Smartphone("Samsung", "Galaxy S30 Ultra 6G", "1400$");
console.log(samsung)

let xiaomi = new Smartphone("Xiaomi", "Mi 10T Pro", "400$")
console.log(xiaomi)