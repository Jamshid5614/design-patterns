import Protsessor from "../abstractClasses/protsessor";
import { protsessorBrands } from "../interfaces/protsessor";

export class I3Protsessor extends Protsessor {
  constructor({ brand }: { brand: protsessorBrands }) {
    super();
    this.brand = brand;
    this.cores = 6;
    this.name = "i3";
    this.threads = 20;
  }
}

export class I5Protsessor extends Protsessor {
  constructor({ brand }: { brand: protsessorBrands }) {
    super();
    this.brand = brand;
    this.cores = 12;
    this.name = "i5";
    this.threads = 40;
  }
}
export class I9Protsessor extends Protsessor {
  constructor({ brand }: { brand: protsessorBrands }) {
    super();
    this.brand = brand;
    this.cores = 24;
    this.name = "i9";
    this.threads = 80;
  }
}
