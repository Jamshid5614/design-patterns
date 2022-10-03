import { protsessorBrands } from "../interfaces/protsessor";

interface IAbstractProtsessor {
  name: string;
  cores: number;
  threads: number;
  brand: protsessorBrands;
}

export default abstract class Protsessor implements IAbstractProtsessor {
  name: string;
  cores: number;
  threads: number;
  brand: protsessorBrands;

  constructor() {
    this.brand = protsessorBrands.intel;
    this.cores = 18;
    this.threads = 90;
    this.name = "i10";
  }
}
