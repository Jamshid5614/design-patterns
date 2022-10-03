export enum protsessorBrands {
  intel,
  apple,
}

export enum protsessorNames {
  i3 = "i3",
  i5 = "i5",
  i9 = "i9",
}

export default interface protsessor {
  name: string;
  cores: number;
  threads: number;
  brand: protsessorBrands;
}
