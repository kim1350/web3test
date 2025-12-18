import { StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import WalletIcon from "@/assets/icons/WalletIcon";
import { useThemeColors } from "@/shared/hooks";
import { PressableCustom, ThemedText } from "@/shared/ui";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

interface TransactionProps {
  title?: string;
  amount?: string | number;
  currency?: string;
  onPress?: () => void;
}

export const Transaction: React.FC<TransactionProps> = React.memo(
  ({ title = "Wallet", amount = "532.00", currency = "USDT", onPress }) => {
    const colors = useThemeColors();

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View
            style={[styles.avatar, { backgroundColor: colors.primary_blue }]}
          >
            <WalletIcon />
          </View>
          <ThemedText size={14} lineHeight={22} font="bold">
            {title}
          </ThemedText>
        </View>

        <View style={styles.row}>
          <ThemedText size={14} lineHeight={22} font="bold">
            {amount}
          </ThemedText>
          <ThemedText size={14} lineHeight={22} font="medium">
            {currency}
          </ThemedText>
          <PressableCustom onPress={onPress}>
            <View style={styles.iconBtn}>
              <ArrowDownIcon />
            </View>
          </PressableCustom>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 41,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20.5,
    marginRight: 8,
  },
  iconBtn: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
