import {
  LargeKeyboard,
  MediumKeyboard,
  SmallKeyboard,
} from "../concreteClasses/keyboard";
import { keyboardBrands, keyboardSizes } from "../interfaces/keyboard";

export default abstract class KeyboardFactory {
  public static getKeyboard({
    size,
    brand,
  }: {
    size: keyboardSizes;
    brand: keyboardBrands;
  }) {
    switch (size) {
      case keyboardSizes.small:
        return new SmallKeyboard({ brand });
      case keyboardSizes.medium:
        return new MediumKeyboard({ brand });
      case keyboardSizes.large:
        return new LargeKeyboard({ brand });
      default:
        return new MediumKeyboard({ brand });
    }
  }
}
