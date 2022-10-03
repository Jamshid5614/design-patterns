import { monitorBrands } from "../interfaces/monitor";

interface IAbstractMonitor {
  width: number;
  height: number;
  contrast: number;
  brand: monitorBrands;
}

export default abstract class Monitor implements IAbstractMonitor {
  width: number;
  height: number;
  contrast: number;
  brand: monitorBrands;

  constructor() {
    this.brand = monitorBrands.gigabyte;
    this.contrast = 9;
    this.height = 100;
    this.width = 200;
  }
}
