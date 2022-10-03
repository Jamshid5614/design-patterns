import { keyboardBrands } from "../interfaces/keyboard";

interface IAbstractKeyboard {
  width: number;
  height: number;
  brand: keyboardBrands;
}

export default abstract class Keyboard implements IAbstractKeyboard {
  width: number;
  height: number;
  brand: keyboardBrands;

  constructor() {
    this.brand = keyboardBrands.ducky;
    this.height = 50;
    this.width = 190;
  }
}
