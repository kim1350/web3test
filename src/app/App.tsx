import { Navigator } from "./navigation";
import { CustomThemeProvider, SafeAreaProvider } from "./providers";
import "react-native-reanimated";
export default function App() {
  return (
    <SafeAreaProvider>
      <CustomThemeProvider>
        <Navigator />
      </CustomThemeProvider>
    </SafeAreaProvider>
  );
}
