import { AddressBadge, Transaction } from "@/features/wallet";
import { PressableCustom } from "@/shared/ui";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  FadeInLeft,
  Keyframe,
  withSpring,
} from "react-native-reanimated";
import { DropdownProps } from "../model/DropdownWallet";

const BadgeExit = new Keyframe({
  0: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }],
  },
  100: {
    opacity: 0,
    transform: [{ translateY: -12 }, { scale: 0.85 }],
  },
}).duration(200);

export const DropdownWallet = ({
  options,
  value = null,
  onSelect,
  style,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const openProgress = useSharedValue(0);

  useEffect(() => {
    if (open) {
      openProgress.value = withSpring(1, {
        damping: 14,
        stiffness: 140,
        mass: 0.6,
      });
    } else {
      openProgress.value = withTiming(0, { duration: 350 });
    }
  }, [open]);

  const maxHeight = options.length * 62;
  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      openProgress.value,
      [0, 0.9, 1],
      [0, maxHeight * 1.04, maxHeight]
    );

    return {
      height,
      opacity: openProgress.value,
    };
  });
  const selectedOption = value
    ? options.find((o) => o.value === value)
    : options.length
    ? options[0]
    : undefined;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.selector}
        onPress={() => setOpen((s) => !s)}
      >
        <Transaction
          title={selectedOption?.title}
          currency={selectedOption?.currency}
          amount={selectedOption?.amount}
          subtitle={open ? selectedOption?.address : undefined}
        />
        {!open && (
          <Animated.View
            entering={FadeInLeft}
            exiting={BadgeExit}
            style={[styles.badgeWrapper]}
          >
            <AddressBadge value={selectedOption?.address ?? ""} />
          </Animated.View>
        )}
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, animatedStyle]}>
        <View style={styles.inner}>
          {options.map((opt, idx) => (
            <PressableCustom
              style={styles.option}
              key={opt.title || idx}
              onPress={() => {
                onSelect?.(opt);
                setOpen(false);
              }}
            >
              <Transaction
                subtitle={opt.address}
                title={opt.title}
                amount={opt.amount}
                currency={opt.currency}
              />
            </PressableCustom>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 84,
  },
  badgeWrapper: {},
  selector: {
    gap: 10,
    padding: 10,
  },
  dropdown: {
    overflow: "hidden",
  },
  inner: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  option: {
    padding: 10,
  },
});
