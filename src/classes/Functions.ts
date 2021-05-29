import MathDilator from "@/classes/Math";
import Color from "@/classes/Color";

export default class Functions {
  constructor() {}

  static math(): MathDilator {
    return new MathDilator();
  }

  static color(): Color {
    return new Color();
  }
}
