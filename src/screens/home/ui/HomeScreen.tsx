import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "expo-image";
import { useThemeColors } from "@/shared/hooks";
import { GlassView } from "expo-glass-effect";
import { scaleW } from "@/shared/constants";
import { DropdownWallet, type Option } from "@/widgets/dropdownWallet";

const exapleoptions = [
  {
    title: "USDT Wallet",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    amount: "1500",
    currency: "USDT",
    value: "1",
  },
  {
    title: "ETH Wallet",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    amount: "2.5",
    currency: "ETH",
    value: "2",
  },
];

export const HomeScreen = () => {
  const colors = useThemeColors();
  const [selected, setSelected] = useState<Option>(exapleoptions[0]);

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
            options={exapleoptions}
          ></DropdownWallet>
        </GlassView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});
