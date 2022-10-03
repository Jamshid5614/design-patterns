import {
  LargeMonitor,
  MediumMonitor,
  SmallMonitor,
} from "../concreteClasses/monitor";
import { monitorBrands, monitorSizes } from "../interfaces/monitor";

export default abstract class MonitorFactory {
  public static getMonitor({
    size,
    brand,
  }: {
    size: monitorSizes;
    brand: monitorBrands;
  }) {
    switch (size) {
      case monitorSizes.small:
        return new SmallMonitor({ brand });
      case monitorSizes.medium:
        return new MediumMonitor({ brand });
      case monitorSizes.large:
        return new LargeMonitor({ brand });
      default:
        return new MediumMonitor({ brand });
    }
  }
}
