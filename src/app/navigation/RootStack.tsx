import { HomeScreen } from "@/screens/home";
import { StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
  },
});
