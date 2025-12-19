import React, { FC } from "react";
import { StyleSheet, TextStyle, ViewStyle, View } from "react-native";
import { ThemedInput } from "@/shared/ui/ThemedInput";
import { GlassView } from "expo-glass-effect";
import { ThemedText, ThemedView } from "@/shared/ui";
import { useThemeColors } from "@/shared/hooks";
import CheckIcon from "@/assets/icons/CheckIcon";

type InputProps = React.ComponentProps<typeof ThemedInput>;

export interface AddressInputProps extends Omit<InputProps, "style"> {
  label?: string;
  helperText?: string;
  error?: string | { message?: string } | null;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

const AddressInput: FC<AddressInputProps> = ({
  label,
  helperText = "Enter TRC-20 address",
  error = null,
  containerStyle,
  inputStyle,
  placeholder = "",
  accessibilityLabel,
  ...inputProps
}) => {
  const colors = useThemeColors();

  const value =
    typeof inputProps.value === "string"
      ? inputProps.value
      : String(inputProps.value ?? "");
  const length = value.length;
  const errorMessage =
    typeof error === "string" ? error : error?.message ?? null;

  const renderStatus = () => {
    if (errorMessage) {
      return (
        <ThemedText
          font="regular"
          size={12}
          lineHeight={20}
          style={styles.statusText}
        >
          {`Address is `}
          <ThemedText font="bold" size={12} lineHeight={20}>
            {errorMessage}
          </ThemedText>
          {` · ${length}/34`}
        </ThemedText>
      );
    }

    if (length > 0) {
      return (
        <View style={styles.statusRow}>
          <ThemedText
            font="regular"
            size={12}
            lineHeight={20}
            style={styles.helper}
          >
            Address
          </ThemedText>
          <View
            style={[
              styles.checkBadge,
              { backgroundColor: colors.primary_blue },
            ]}
          >
            <CheckIcon />
          </View>
        </View>
      );
    }

    return (
      <ThemedText
        font="regular"
        size={12}
        lineHeight={20}
        style={styles.helper}
      >
        {helperText}
      </ThemedText>
    );
  };

  return (
    <GlassView style={[styles.glass, containerStyle]}>
      <ThemedView
        style={[
          styles.inner,
          errorMessage && { borderColor: colors.border, borderWidth: 1.35 },
        ]}
        color="blur"
      >
        {label ? (
          <ThemedText font="regular" size={12} style={styles.label}>
            {label}
          </ThemedText>
        ) : null}

        <View style={styles.row}>
          <ThemedInput
            placeholder={placeholder}
            placeholderTextColor={colors.foreground}
            accessibilityLabel={accessibilityLabel ?? label ?? placeholder}
            editable={inputProps.editable ?? true}
            style={[styles.input, inputStyle]}
            {...inputProps}
          />
        </View>

        {renderStatus()}
      </ThemedView>
    </GlassView>
  );
};

export default AddressInput;

const styles = StyleSheet.create({
  glass: {
    borderRadius: 20,
  },
  inner: {
    borderRadius: 20,
    padding: 10,
    gap: 8,
  },
  label: {
    textAlign: "left",
    opacity: 0.9,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    textAlign: "center",
  },
  right: {
    marginLeft: 8,
  },
  helper: {
    textAlign: "center",
    opacity: 0.6,
  },
  errorText: {
    color: "#FF6B6B",
    textAlign: "center",
    opacity: 1,
  },
  statusText: {
    textAlign: "center",
    opacity: 0.6,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkBadge: {
    height: 18,
    width: 18,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
