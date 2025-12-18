import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "expo-image";
import { useThemeColors } from "@/shared/hooks";
import { GlassView } from "expo-glass-effect";
import { EXAMPLE_WALLETS, scaleW } from "@/shared/constants";
import { DropdownWallet, type Option } from "@/widgets/dropdownWallet";

export const HomeScreen = () => {
  const colors = useThemeColors();
  const [selected, setSelected] = useState<Option>(EXAMPLE_WALLETS[0]);

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center" }}
      source={require("@assets/images/background.png")}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlassView
          style={{
            backgroundColor: colors.blur,

            gap: 10,
            width: 371 * scaleW,
            borderRadius: 12,
          }}
        >
          <DropdownWallet
            value={selected.value}
            onSelect={(item) => {
              setSelected(item);
            }}
            options={EXAMPLE_WALLETS}
          ></DropdownWallet>
        </GlassView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});
