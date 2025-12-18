import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { useThemeColors } from "@/shared/hooks";
import { ThemedText } from "@/shared/ui";

interface TransactionProps {
  title?: string;
  subtitle?: string | null;
  amount?: string | number;
  currency?: string;
  showArrow?: boolean;
}

export const TransactionHistory: React.FC<TransactionProps> = React.memo(
  ({ title = "Wallet", subtitle, amount = "532.00", currency = "USDT" }) => {
    const colors = useThemeColors();
    const progress = useSharedValue(subtitle ? 1 : 0);

    const shortValue = subtitle
      ? `${subtitle?.slice(0, 6)}...${subtitle?.slice(-4)}`
      : null;
    useEffect(() => {
      progress.value = withTiming(subtitle ? 1 : 0, { duration: 200 });
    }, [subtitle, progress]);

    return (
      <View style={styles.container}>
        <View style={styles.leftRow}>
          <View
            style={[styles.avatar, { backgroundColor: colors.primary_blue }]}
          ></View>
          <View style={styles.titleWrap}>
            <ThemedText
              size={14}
              lineHeight={22}
              font="bold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </ThemedText>

            <Animated.View
              style={useAnimatedStyle(() => ({
                opacity: progress.value,
                transform: [
                  {
                    translateY: interpolate(progress.value, [0, 1], [-6, 0]),
                  },
                ],
              }))}
            >
              {subtitle && (
                <ThemedText
                  size={12}
                  lineHeight={18}
                  font="medium"
                  numberOfLines={1}
                  ellipsizeMode="middle"
                >
                  {shortValue}
                </ThemedText>
              )}
            </Animated.View>
          </View>
        </View>

        <View style={styles.rightRow}>
          <ThemedText
            size={14}
            lineHeight={22}
            font="bold"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.amountText}
          >
            {amount}
          </ThemedText>
          <ThemedText
            size={14}
            lineHeight={22}
            font="medium"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.currencyText}
          >
            {currency}
          </ThemedText>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    minWidth: 0,
  },
  titleWrap: {
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 8,
    justifyContent: "flex-end",
    minWidth: 0,
  },
  avatar: {
    width: 41,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  iconBtn: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  amountText: {
    maxWidth: 90,
    textAlign: "right",
  },
  currencyText: {
    maxWidth: 60,
  },
});
