import { Theme, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Colors } from "./colors";

export const LightThemeCustom: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...Colors.light,
  },
};

export const DarkThemeCustom: Theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...Colors.dark,
  },
};
