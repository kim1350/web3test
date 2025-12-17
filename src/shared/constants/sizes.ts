import { Dimensions } from "react-native";

export const fontSizes = [10, 12, 14, 16, 18, 22, 24, 28, 32] as const;

export const lineHeights = [
  12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40,
] as const;

export const SWIDTH = Dimensions.get("screen").width;

export const SHEIGTH = Dimensions.get("screen").height;

export const scaleW = SWIDTH / 960;

export const scaleH = SHEIGTH / 540;

export function getScaledSize(
  value: number,
  type: "vertical" | "horizontal"
): number {
  "worklet";

  return value * (type === "vertical" ? scaleH : scaleW);
}
