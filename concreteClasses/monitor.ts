import Monitor from "../abstractClasses/monitor";
import { monitorBrands } from "../interfaces/monitor";

export class SmallMonitor extends Monitor {
  constructor({ brand }: { brand: monitorBrands }) {
    super();
    this.brand = brand;
    this.height = 70;
    this.contrast = 10;
    this.width = 90;
  }
}

export class MediumMonitor extends Monitor {
  constructor({ brand }: { brand: monitorBrands }) {
    super();
    this.brand = brand;
    this.height = 80;
    this.contrast = 9;
    this.width = 100;
  }
}
export class LargeMonitor extends Monitor {
  constructor({ brand }: { brand: monitorBrands }) {
    super();
    this.brand = brand;
    this.height = 90;
    this.contrast = 12;
    this.width = 110;
  }
}
