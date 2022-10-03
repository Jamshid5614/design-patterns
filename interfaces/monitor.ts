export enum monitorBrands {
  apple,
  asus,
  acer,
  msi,
  samsung,
  gigabyte,
}

export enum monitorSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export default interface monitor {
  height: number;
  width: number;
  contrast: number;
  brand: monitorBrands;
}
