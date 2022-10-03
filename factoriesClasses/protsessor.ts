import {
  I3Protsessor,
  I5Protsessor,
  I9Protsessor,
} from "../concreteClasses/protsessor";
import { protsessorBrands, protsessorNames } from "../interfaces/protsessor";

export default abstract class ProtsessorFactory {
  public static getProtsessor({
    name,
    brand,
  }: {
    name: protsessorNames;
    brand: protsessorBrands;
  }) {
    switch (name) {
      case protsessorNames.i3:
        return new I3Protsessor({ brand });
      case protsessorNames.i5:
        return new I5Protsessor({ brand });
      case protsessorNames.i9:
        return new I9Protsessor({ brand });
      default:
        return new I5Protsessor({ brand });
    }
  }
}
