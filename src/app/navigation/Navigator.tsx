import { createStaticNavigation } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { useThemeContext } from "../providers";
import { RootStack } from "./RootStack";

SplashScreen.preventAutoHideAsync();

const Navigation = createStaticNavigation(RootStack);

export const Navigator = () => {
  const { theme } = useThemeContext();

  return (
    <Navigation
      theme={theme}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
};
