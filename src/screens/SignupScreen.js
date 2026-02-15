import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import AppBackground from "../../components/AppBackground";

export default function SignupScreen({ navigation }) {
  const router = useRouter();

  const goToLocation = () => {
    if (navigation?.navigate) {
      navigation.navigate("Location");
      return;
    }
    router.push("/location");
  };

  const goToLogin = () => {
    if (navigation?.navigate) {
      navigation.navigate("Login");
      return;
    }
    router.back();
  };

  return (
    <AppBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Neighbor!</Text>
        <Text style={styles.subtitle}>Create your account and join your local community.</Text>

        <View style={styles.field}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput style={styles.input} placeholder="Arjun Sharma" placeholderTextColor="#7f99c5" />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.input}
            placeholder="arjun@example.com"
            placeholderTextColor="#7f99c5"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>PHONE NUMBER</Text>
          <TextInput style={styles.input} placeholder="+91 98765 43210" placeholderTextColor="#7f99c5" keyboardType="phone-pad" />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput style={styles.input} placeholder="........" placeholderTextColor="#7f99c5" secureTextEntry />
        </View>

        <TouchableOpacity onPress={goToLocation} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToLogin} style={styles.footerAction}>
          <Text style={styles.footerText}>
            Already a member? <Text style={styles.footerLink}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 24,
  },
  title: {
    color: "#e6f0ff",
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: -0.4,
  },
  subtitle: {
    color: "#8ca6d3",
    marginTop: 8,
    marginBottom: 20,
    fontSize: 14,
  },
  field: {
    marginBottom: 12,
  },
  label: {
    color: "#8ca6d3",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
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
  primaryButton: {
    marginTop: 8,
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
  footerAction: {
    marginTop: 20,
    alignSelf: "center",
  },
  footerText: {
    color: "#8ca6d3",
    fontSize: 12,
  },
  footerLink: {
    color: "#5ca6ff",
    fontWeight: "700",
  },
});
