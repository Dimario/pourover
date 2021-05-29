const ColorOptions: { [key: string]: string } = {
  color_1: "#e06060",
  color_2: "#ff0000",
  color_3: "#ff7700",
  color_4: "#ffd500",
  color_5: "#91ae25",
  color_6: "#5bff21",
  color_7: "#04a275",
  color_8: "#75eaf1",
  color_9: "#0066ff",
  color_10: "#dca2ff",
  color_11: "#d000ff",
  color_12: "#ff00a1",
  color_13: "#000000",
  color_14: "#8f8f8f",
  color_16: "#ff0000",
  color_17: "#ff0000",
};

export default class Color {
  constructor() {}

  generate(i: number): string {
    return ColorOptions[`color_${i}`];
  }
}
