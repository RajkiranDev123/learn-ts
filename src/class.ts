console.log("instanceof : type guard in class ============================>");

class Dog2 {
  bark() {
    console.log("woof");
  }
}

class Cat {
  meow() {
    console.log("meow ");
  }
}

function makeSound(obj: Dog2 | Cat) {
  if (obj instanceof Dog2) {
    obj.bark();
  } else {
    obj.meow();
  }
}
let obj = new Cat();
makeSound(obj); //meow

//////////////////////////////////////////////////////////////////

console.log("class ====================================>");

// access  modifier :

// Public members → accessible anywhere

// Protected members → accessible inside class/parent class/base class or subclass

// Private members → accessible only inside the class/parent class/base class.

// Static members → accessible without an instance, directly via the class.

class Person2 {
  private name: string;
  protected age: number;
  public email;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  //methods
  public introduce(): string {
    return `hi i'm ${this.name} and i'm ${this.age} yrs old`;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

////////////////////////// short way ////////////////////////////////

class Employee1 {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let piy = new Employee1(101, "piu", "eng");
console.log(piy.getDetails());

class Manager extends Employee1 {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

////////////////////////////////////////////// last eg of class /////////////

console.log(
  "last =====================================================================================================>",
);

class Person4 {
  public name: string;
  protected age: number;
  private ssn: string;
  static species: string = "Homo sapiens"; // static member

  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }

  public greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  protected showAge() {
    console.log(`Age: ${this.age}`);
  }

  private showSSN() {
    console.log(`SSN: ${this.ssn}`);
  }

  static showSpecies() {
    console.log(`Species: ${Person4.species}`);
  }
}

// Instance of same class/parent class
const p = new Person4("Alice", 30, "123-45-6789");
console.log(p.name); // ✅ public
//console.log(p.age);      // ❌ protected
//console.log(p.ssn);      // ❌ private
p.greet(); // ✅ public method
// p.showAge();            // ❌ protected
// p.showSSN();            // ❌ private

// Subclass
class Employee4 extends Person4 {
  showInfo() {
    console.log(this.name); // ✅ public
    console.log(this.age); // ✅ protected
    // console.log(this.ssn);  // ❌ private
  }
}

const e = new Employee4("Bob", 25, "987-65-4321");

//if a subclass has no constructor, it automatically calls the parent class constructor with the same arguments
//can pass arguments directly when creating the subclass instance.
// No subclass constructor → no super needed.

e.showInfo(); // ✅ works, uses protected internally
console.log(e.name); // ✅ public
// console.log(e.age);     // ❌ protected, cannot access from outside
// console.log(e.ssn);     // ❌ private

// Accessing static member (outside instance)
Person4.showSpecies(); // ✅ Works

console.log("super =============>");

class Person5 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee5 extends Person5 {
  constructor(name: string) {
    // console.log(this.name); // ❌ ERROR
    super(name); //arguments you pass are sent to the parent constructor.
  }
}

let x4 = new Employee5("Alice"); //Memory is allocated, but this is not yet initialized because Employee5 extends Person5.
// You immediately do:

// console.log(this.name); // ❌

// At this point, this does not exist yet.

// JavaScript throws a runtime error:
// Reason: super(...) runs the parent constructor, creating and initializing the object. Without it, this doesn’t exist yet.

//
