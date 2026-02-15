import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MapPin } from "lucide-react-native";
import { useRouter } from "expo-router";

import AppBackground from "../../components/AppBackground";

export default function LocationScreen({ navigation }) {
  const router = useRouter();

  const continueToMain = () => {
    if (navigation?.navigate) {
      navigation.navigate("MainApp");
      return;
    }
    router.replace("/(tabs)");
  };

  return (
    <AppBackground>
      <View style={styles.container}>
        <View style={styles.pinOuter}>
          <View style={styles.pinInner}>
            <MapPin color="#ffffff" size={32} style={styles.pinIcon} />
          </View>
        </View>

        <Text style={styles.title}>Let's find your neighbors</Text>
        <Text style={styles.subtitle}>
          We need your location to connect you with tasks and helpers in your immediate area.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Search city, neighborhood, or zip..."
            placeholderTextColor="#7f99c5"
          />
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity onPress={continueToMain} style={styles.primaryButton}>
            <Text style={styles.primaryText}>Use Current Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pinOuter: {
    width: 224,
    height: 224,
    borderRadius: 112,
    borderWidth: 1,
    borderColor: "#223a70",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 34,
  },
  pinInner: {
    width: 84,
    height: 84,
    backgroundColor: "#3b82f6",
    borderRadius: 26,
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  pinIcon: {
    transform: [{ rotate: "-45deg" }],
  },
  title: {
    color: "#e6f0ff",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 16,
    letterSpacing: -0.4,
  },
  subtitle: {
    color: "#8ca6d3",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 28,
    fontSize: 14,
    lineHeight: 21,
  },
  form: {
    width: "100%",
    marginTop: 28,
  },
  input: {
    backgroundColor: "#101f44",
    borderWidth: 1,
    borderColor: "#223a70",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: "#e6f0ff",
    fontSize: 15,
  },
  orText: {
    color: "#8ca6d3",
    textAlign: "center",
    fontSize: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 18,
  },
});
