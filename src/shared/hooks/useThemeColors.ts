import { useTheme } from "@/app/providers/ThemeProvider";
import { Colors } from "../constants";

export function useThemeColors() {
  const currentTheme = useTheme();
  const theme = currentTheme?.theme.dark ? "dark" : "light";

  return Colors[theme];
}
