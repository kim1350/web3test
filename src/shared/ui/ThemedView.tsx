import { View, type ViewProps } from "react-native";
import { useThemeColors } from "../hooks";
import { FC } from "react";

type ThemedViewProps = ViewProps & {
  color?: keyof ReturnType<typeof useThemeColors>;
};

export const ThemedView: FC<ThemedViewProps> = ({
  style,
  color = "background",
  ...otherProps
}) => {
  const colors = useThemeColors();
  return (
    <View style={[{ backgroundColor: colors[color] }, style]} {...otherProps} />
  );
};
