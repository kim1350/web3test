import { PixelRatio } from "react-native";

export const fonts = {
  regular: {
    fontFamily: "Montserrat",
    fontWeight: "400",
  },
  medium: {
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
  bold: {
    fontFamily: "Montserrat",
    fontWeight: "700",
  },
  heavy: {
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
};

export const normalize = (size: number) => {
  return size / PixelRatio.getFontScale();
};
