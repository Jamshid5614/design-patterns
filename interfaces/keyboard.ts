export enum keyboardBrands {
  ducky,
  leapold,
  apple,
}

export enum keyboardSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export default interface keyboard {
  height: number;
  width: number;
  brand: keyboardBrands;
}
