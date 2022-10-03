import monitor from "./monitor";
import keyboard from "./keyboard";
import protsessor from "./protsessor";

export default interface computer {
  monitor: monitor;
  keyboard: keyboard;
  protsessor: protsessor;
}
