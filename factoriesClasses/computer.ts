import MonitorFactory from "./monitor";
import KeyboardFactory from "./keyboard";
import ProtsessorFactory from "./protsessor";
import { monitorSizes } from "../interfaces/monitor";
import { keyboardSizes } from "../interfaces/keyboard";
import { protsessorNames } from "../interfaces/protsessor";

export default class ComputerFactory {
  static order({
    monitorSize,
    keyboardSize,
    brand,
    protsessorName,
  }: {
    monitorSize: monitorSizes;
    keyboardSize: keyboardSizes;
    brand: any;
    protsessorName: protsessorNames;
  }) {
    return {
      monitor: MonitorFactory.getMonitor({ brand, size: monitorSize }),
      keyboard: KeyboardFactory.getKeyboard({ brand, size: keyboardSize }),
      protsessor: ProtsessorFactory.getProtsessor({
        brand,
        name: protsessorName,
      }),
      brand: brand,
    };
  }
}
