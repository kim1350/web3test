import { TextInput, TextInputProps, TextStyle } from "react-native";
import { fonts, fontSizes, lineHeights, normalize } from "../constants";
import { useThemeColors } from "../hooks";
import { FC } from "react";

interface ThemedInputProps extends TextInputProps {
  font?: keyof typeof fonts;
  size?: (typeof fontSizes)[number];
  lineHeight?: (typeof lineHeights)[number];
  color?: keyof ReturnType<typeof useThemeColors>;
  backgroundColor?: keyof ReturnType<typeof useThemeColors>;
  borderColor?: keyof ReturnType<typeof useThemeColors>;
}

export const ThemedInput: FC<ThemedInputProps> = ({
  font = "regular",
  size = 16,
  lineHeight,
  style,
  backgroundColor = "muted_foreground",
  borderColor = "borderAddress",
  color = "foreground",
  ...props
}) => {
  const colors = useThemeColors();
  return (
    <TextInput
      style={[
        {
          ...fonts[font],
          fontSize: normalize(size),
          lineHeight: lineHeight ? normalize(lineHeight) : undefined,
          color: colors[color],
          backgroundColor: colors[backgroundColor],
          padding: 14,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors[borderColor],
        } as TextStyle,
        style,
      ]}
      {...props}
    />
  );
};
