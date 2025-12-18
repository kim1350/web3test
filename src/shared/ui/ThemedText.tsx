import { Text, TextStyle, type TextProps } from "react-native";
import { fonts, fontSizes, lineHeights, normalize } from "../constants";
import { useThemeColors } from "../hooks";
import { FC } from "react";

interface ThemedTextProps extends TextProps {
  font?: keyof typeof fonts;
  size?: (typeof fontSizes)[number];
  lineHeight?: (typeof lineHeights)[number];
  color?: keyof ReturnType<typeof useThemeColors>;
}

export const ThemedText: FC<ThemedTextProps> = ({
  font = "regular",
  size = 16,
  lineHeight,
  style,
  color = "foreground",
  ...props
}) => {
  const colors = useThemeColors();
  return (
    <Text
      style={[
        {
          ...fonts[font],
          fontSize: normalize(size),
          lineHeight: lineHeight ? normalize(lineHeight) : undefined,
          color: colors[color],
        } as TextStyle,
        style,
      ]}
      {...props}
    />
  );
};
