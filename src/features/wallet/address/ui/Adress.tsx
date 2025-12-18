import CopyIcon from "@/assets/icons/CopyIcon";
import { useThemeColors } from "@/shared/hooks";
import { ThemedText, ThemedView } from "@/shared/ui";
import { GlassView } from "expo-glass-effect";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from "react-native";

type Props = {
  value: string;
};

export const AddressBadge: React.FC<Props> = ({ value }) => {
  const onCopy = () => {
    Clipboard.setString(value);
  };

  const shortValue = `${value.slice(0, 6)}...${value.slice(-4)}`;
  const colors = useThemeColors();
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.foreground,
          backgroundColor: colors.muted_foreground,
        },
      ]}
    >
      <View style={styles.addressWrapper}>
        <ThemedText size={18} font="regular">
          {shortValue}
        </ThemedText>
      </View>

      <TouchableOpacity onPress={onCopy} style={styles.copyButton}>
        <CopyIcon fillColor={colors.foreground} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderWidth: 1,
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 16,
  },

  addressWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },

  copyButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
