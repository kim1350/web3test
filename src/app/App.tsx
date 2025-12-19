import { Navigator } from "./navigation";
import {
  CustomThemeProvider,
  KeyboardProvider,
  SafeAreaProvider,
} from "./providers";
import "react-native-reanimated";
export default function App() {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <CustomThemeProvider>
          <Navigator />
        </CustomThemeProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}
