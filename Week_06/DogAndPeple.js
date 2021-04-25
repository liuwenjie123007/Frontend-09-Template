class Dog {
  power;
  hp;
  constructor(power, hp) {
    this.power = power;
    this.hp = hp;
  }
  battle(person) {
    if (this.power > person.power) {
      person.hurt(this.power - person.power);
    } else {
      this.hurt(person.power - this.power);
    }
    console.log("person HP:", person.hp);
    console.log("dog HP:", this.hp);
    if (this.hp <= 0) {
      console.log("dog Die");
    }
    if (person.hp <= 0) {
      console.log("person Die");
    }
  }
  hurt(damage) {
    this.hp -= damage;
  }
}

class Person {
  power;
  hp;
  constructor(power, hp) {
    this.power = power;
    this.hp = hp;
  }
  battle(dog) {
    if (this.power > dog.power) {
      dog.hurt(this.power - dog.power);
    } else {
      this.hurt(dog.power - this.power);
    }
    console.log("person HP:", dog.hp);
    console.log("dog HP:", this.hp);
    if (this.hp <= 0) {
      console.log("dog Die");
    }
    if (person.hp <= 0) {
      console.log("person Die");
    }
  }
  hurt(damage) {
    this.hp -= damage;
  }
}


let dog = new Dog(10, 10);
let person = new Person(5, 100);
for (let i = 0; i < 100; i++) {
  dog.battle(person);
}