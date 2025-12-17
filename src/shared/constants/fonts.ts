import { PixelRatio } from "react-native";

export const fonts = {
  regular: {
    fontFamily: "SF-Regular",
    fontWeight: "400",
  },
  medium: {
    fontFamily: "SF-Medium",
    fontWeight: "500",
  },
  bold: {
    fontFamily: "SF-Bold",
    fontWeight: "700",
  },
  heavy: {
    fontFamily: "SF-Black",
    fontWeight: "900",
  },
};

export const normalize = (size: number) => {
  return size / PixelRatio.getFontScale();
};
