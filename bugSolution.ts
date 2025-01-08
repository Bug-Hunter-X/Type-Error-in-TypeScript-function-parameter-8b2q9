function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Accessing the first element
console.log(greeter(user.join(" "))); // Joining the array elements into a string