import { Navigator } from "./navigation";
import { CustomThemeProvider } from "./providers";

export default function App() {
  return (
    <CustomThemeProvider>
      <Navigator />
    </CustomThemeProvider>
  );
}
