import { DarkThemeCustom, LightThemeCustom } from "@/shared/constants";
import { Theme } from "@react-navigation/native";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextProps {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext error: no ThemeContext found");
  }
  return ctx;
};

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? DarkThemeCustom : LightThemeCustom;

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
