import { Navigator } from "./navigation";
import { CustomThemeProvider, SafeAreaProvider } from "./providers";

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomThemeProvider>
        <Navigator />
      </CustomThemeProvider>
    </SafeAreaProvider>
  );
}
