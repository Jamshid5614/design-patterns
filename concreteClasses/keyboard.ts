import Keyboard from "../abstractClasses/keyboard";
import { keyboardBrands } from "../interfaces/keyboard";

export class SmallKeyboard extends Keyboard {
  constructor({ brand }: { brand: keyboardBrands }) {
    super();
    this.brand = brand;
    this.height = 30;
    this.width = 70;
  }
}

export class MediumKeyboard extends Keyboard {
  constructor({ brand }: { brand: keyboardBrands }) {
    super();
    this.brand = brand;
    this.height = 40;
    this.width = 80;
  }
}
export class LargeKeyboard extends Keyboard {
  constructor({ brand }: { brand: keyboardBrands }) {
    super();
    this.brand = brand;
    this.height = 50;
    this.width = 90;
  }
}
