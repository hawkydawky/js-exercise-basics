let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (const i in user) {
  newUser[i] = user[i];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
