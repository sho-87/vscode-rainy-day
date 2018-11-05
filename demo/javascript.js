console.log(`hello world`);
console.table([1, 2, 3]);

var name = 'User';
let age = 28;
const trueBool = true;
const falseBool = false;

const numbersArray = [1, 3, 5, 6, 78, 23];

const personArray = new Object({
  firstName: 'John',
  lastName: 'Doe'
});

const today = new Date();
console.log(today.getMonth);

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log(`${i} is my favourite number`);

    // end current iteration
    continue;
  }

  console.log(`Current number: ${i}`);
}

document.querySelector('#header-title').textContent = 'New title';

class Person {
  // Multi
  // line
  // comment
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  /* Block
  comment

  Code within comment:

  function myFunction(x1, x2) {
    console.log('things');
  } */

  constructor(firstName, lastName, membership) {
    super(firstName, lastName);

    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Person('John', 'Doe');
console.log(john.greeting());
