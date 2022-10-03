import ComputerFactory from "./factoriesClasses/computer";
import { keyboardSizes } from "./interfaces/keyboard";
import { monitorSizes } from "./interfaces/monitor";
import { protsessorNames } from "./interfaces/protsessor";

const computer = ComputerFactory.order({
  monitorSize: monitorSizes.large,
  keyboardSize: keyboardSizes.large,
  brand: "Windows",
  protsessorName: protsessorNames.i9,
});

console.log(computer);

class PersonBuilder {
  name: string;
  age: number;
  gender: string;
  weight: number;

  constructor(
    name: string,
    { age, gender, weight }: { age: number; gender: string; weight: number }
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
  }

  setWeight(weight: number) {
    this.weight += weight;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }
}

const personOne = new PersonBuilder("Jamshid", {
  age: 17,
  gender: "male",
  weight: 67.2,
});
