import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ImageBackground } from "expo-image";
import { useThemeColors } from "@/shared/hooks";
import { GlassView } from "expo-glass-effect";
import { EXAMPLE_WALLETS, scaleW } from "@/shared/constants";
import { DropdownWallet, type Option } from "@/widgets/dropdownWallet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ThemedText } from "@/shared/ui";
import { TransactionHistory } from "@/features/transaction-history";

export const HomeScreen = () => {
  const colors = useThemeColors();
  const [selected, setSelected] = useState<Option>(EXAMPLE_WALLETS[0]);
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["20%", "40%"], []);

  const onSelect = useCallback((item: Option) => setSelected(item), []);

  const glassStyle = useMemo(
    () => [styles.glass, { backgroundColor: colors.blur }],
    [colors.blur]
  );

  const bottomStyle = useMemo(
    () => ({ borderRadius: 20, backgroundColor: colors.background }),
    [colors.background]
  );

  const transactions = useMemo(
    () => [
      {
        id: "t1",
        title: "Payment",
        subtitle: "0xabc123...",
        amount: "120.00",
        currency: "USDT",
      },
      {
        id: "t2",
        title: "Refund",
        subtitle: "0xdef456...",
        amount: "-20.00",
        currency: "USDT",
      },
      {
        id: "t3",
        title: "Swap",
        subtitle: "0x789ghi...",
        amount: "0.5",
        currency: "ETH",
      },
    ],
    []
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
        source={require("@assets/images/background.png")}
      >
        <View style={styles.center}>
          <GlassView style={glassStyle}>
            <DropdownWallet
              value={selected.value}
              onSelect={onSelect}
              options={EXAMPLE_WALLETS}
            />
          </GlassView>
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
              {transactions.map(renderTransaction)}
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
  center: { justifyContent: "center", alignItems: "center" },
  glass: { gap: 10, width: 371 * scaleW, borderRadius: 12 },
  sheetContent: { gap: 20 },
  sheetHeader: { marginHorizontal: 12 },
  divider: { height: 1, marginHorizontal: 10 },
  itemContainer: { padding: 12 },
});
