import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AppBackground({ children, noPadding = false }) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["rgba(26, 59, 141, 0.4)", "transparent"]}
        style={styles.topGlow}
      />
      <LinearGradient
        colors={["rgba(21, 91, 184, 0.2)", "transparent"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.bottomGlow}
      />
      <SafeAreaView style={[styles.safe, !noPadding && styles.safePadding]}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#070f25",
  },
  safe: {
    flex: 1,
  },
  safePadding: {
    paddingHorizontal: 20,
  },
  topGlow: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 300,
    height: 300,
  },
  bottomGlow: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 400,
    height: 400,
  },
});
