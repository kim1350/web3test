import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ImageBackground } from "expo-image";
import { useThemeColors } from "@/shared/hooks";
import { GlassView } from "expo-glass-effect";
import {
  EXAMPLE_TRANSACTIONS,
  EXAMPLE_WALLETS,
  scaleW,
} from "@/shared/constants";
import { DropdownWallet, type Option } from "@/widgets/dropdownWallet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { PressableCustom, ThemedText } from "@/shared/ui";
import { TransactionHistory } from "@/features/transaction-history";
import AddressInput from "@/features/address-input/AddressInput";
import { Controller, useForm } from "react-hook-form";
import { useThemeContext } from "@/app/providers";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const { control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      addressValues: "",
    },
  });
  const colors = useThemeColors();
  const [selected, setSelected] = useState<Option>(EXAMPLE_WALLETS[0]);
  const sheetRef = useRef<BottomSheet>(null);
  const { toggleTheme, isDark } = useThemeContext();
  const snapPoints = useMemo(() => ["20%", "40%"], []);
  const insets = useSafeAreaInsets();
  const onSelect = useCallback((item: Option) => setSelected(item), []);

  const bottomStyle = useMemo(
    () => ({ borderRadius: 20, backgroundColor: colors.blur }),
    [colors.blur]
  );

  const renderTransaction = useCallback(
    (tx: {
      id: string;
      title: string;
      subtitle?: string;
      amount?: string | number;
      currency?: string;
    }) => (
      <View key={tx.id} style={{ paddingHorizontal: 12 }}>
        <TransactionHistory
          title={tx.title}
          subtitle={tx.subtitle}
          amount={tx.amount}
          currency={tx.currency}
        />
      </View>
    ),
    []
  );

  return (
    <GestureHandlerRootView style={styles.flex}>
      <ImageBackground
        style={styles.background}
        source={
          isDark
            ? require("@assets/images/background-dark.png")
            : require("@assets/images/background.png")
        }
      >
        <PressableCustom
          style={{ position: "absolute", top: insets.top + 8, right: 8 }}
          onPress={toggleTheme}
        >
          <ThemedText>Поменть тему </ThemedText>
        </PressableCustom>
        <View style={styles.center}>
          <GlassView style={[styles.glass]}>
            <View style={{ borderRadius: 12, backgroundColor: colors.blur }}>
              <DropdownWallet
                value={selected.value}
                onSelect={onSelect}
                options={EXAMPLE_WALLETS}
              />
            </View>
          </GlassView>
          <Controller
            control={control}
            name="addressValues"
            rules={{
              required: false,
              validate: (val: string) => {
                const v = (val ?? "").trim();
                if (v.length < 34) return "too short";
                if (v.length > 34) return "too long";
                return true;
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <AddressInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="..."
                error={error?.message}
              />
            )}
          />
        </View>

        <BottomSheet
          ref={sheetRef}
          backgroundStyle={bottomStyle}
          backgroundComponent={(props) => <GlassView {...props} />}
          index={1}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
        >
          <BottomSheetScrollView>
            <View style={styles.sheetContent}>
              <View style={styles.sheetHeader}>
                <ThemedText font="bold">Transactions</ThemedText>
              </View>
              <View
                style={[
                  styles.divider,
                  { backgroundColor: colors.muted_foreground },
                ]}
              />
              {EXAMPLE_TRANSACTIONS.map(renderTransaction)}
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  background: { flex: 1, justifyContent: "center" },
  center: { gap: 12, paddingHorizontal: 12 },
  glass: { gap: 10, borderRadius: 12 },
  sheetContent: { gap: 20 },
  sheetHeader: { marginHorizontal: 12 },
  divider: { height: 1, marginHorizontal: 10 },
  itemContainer: { padding: 12 },
});
