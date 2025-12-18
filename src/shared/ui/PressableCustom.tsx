import React, { FC } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  createAnimatedComponent,
} from "react-native-reanimated";

interface PressableCustomProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  pressedScale?: number;
  pressedOpacity?: number;
  animationDuration?: number;
}

const AnimatedPressable = createAnimatedComponent(Pressable);

export const PressableCustom: FC<PressableCustomProps> = ({
  children,
  onPress,
  disabled = false,
  style,
  pressedScale = 0.96,
  pressedOpacity = 0.85,
  animationDuration = 120,
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const onPressIn = () => {
    if (disabled) return;
    scale.value = withTiming(pressedScale, {
      duration: animationDuration,
      easing: Easing.out(Easing.quad),
    });
    opacity.value = withTiming(pressedOpacity, {
      duration: animationDuration,
    });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, {
      duration: animationDuration,
      easing: Easing.out(Easing.quad),
    });
    opacity.value = withTiming(1, {
      duration: animationDuration,
    });
  };

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[style, animatedStyle]}
    >
      {children}
    </AnimatedPressable>
  );
};
