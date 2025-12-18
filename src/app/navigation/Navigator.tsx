import { createStaticNavigation } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { useThemeContext } from "../providers";
import { RootStack } from "./RootStack";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Navigation = createStaticNavigation(RootStack);

export const Navigator = () => {
  const { theme } = useThemeContext();
  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
    Montserrat: require("@assets/fonts/Montserrat-VariableFont.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Navigation
      theme={theme}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
};
