import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import AppBackground from "../../components/AppBackground";

export default function LoginScreen({ navigation }) {
  const router = useRouter();

  const goToLocation = () => {
    if (navigation?.navigate) {
      navigation.navigate("Location");
      return;
    }
    router.push("/location");
  };

  const goToSignup = () => {
    if (navigation?.navigate) {
      navigation.navigate("Signup");
      return;
    }
    router.push("/signup");
  };

  return (
    <AppBackground>
      <View style={styles.container}>
        <View style={styles.brandWrap}>
          <LinearGradient colors={["#2f74ff", "#56b1ff"]} style={styles.logo}>
            <Text style={styles.logoText}>NH</Text>
          </LinearGradient>
          <Text style={styles.title}>Namaste, Neighbor</Text>
          <Text style={styles.subtitle}>Log in to start helping your community.</Text>
        </View>

        <View>
          <View style={styles.field}>
            <Text style={styles.label}>MOBILE NUMBER</Text>
            <TextInput
              style={styles.input}
              placeholder="+91 98765 43210"
              placeholderTextColor="#7f99c5"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.field}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>PASSWORD</Text>
              <Text style={styles.forgot}>Forgot?</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="........"
              placeholderTextColor="#7f99c5"
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={goToLocation} style={styles.primaryButton}>
            <Text style={styles.primaryText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or continue with</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={goToSignup} style={styles.footerAction}>
          <Text style={styles.footerText}>
            New to the neighborhood? <Text style={styles.footerLink}>Sign Up</Text>
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
  brandWrap: {
    alignItems: "center",
    marginBottom: 34,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800",
  },
  title: {
    color: "#e6f0ff",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 18,
    letterSpacing: -0.4,
  },
  subtitle: {
    color: "#8ca6d3",
    marginTop: 8,
    fontSize: 14,
  },
  field: {
    marginBottom: 14,
  },
  label: {
    color: "#8ca6d3",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgot: {
    color: "#5ca6ff",
    fontSize: 11,
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
    marginTop: 6,
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
  orText: {
    color: "#8ca6d3",
    textAlign: "center",
    fontSize: 12,
    marginVertical: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialBtn: {
    flex: 1,
    backgroundColor: "#101f44",
    borderWidth: 1,
    borderColor: "#223a70",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 4,
  },
  socialText: {
    color: "#e6f0ff",
    fontWeight: "700",
  },
  footerAction: {
    marginTop: 26,
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
