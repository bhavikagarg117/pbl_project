import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const steps = [
  { key: "login", label: "Login Screen" },
  { key: "signup", label: "Sign Up Screen" },
  { key: "location", label: "Select Location" },
  { key: "home", label: "Task Feed Homepage" },
  { key: "sidebar", label: "Sidebar Menu" },
  { key: "messages", label: "Messages" },
];

const taskData = [
  { title: "Urgent AC Repair Needed", tag: "URGENT", price: "Rs 800", meta: "0.4 km • 10m ago" },
  { title: "Tiffin Delivery", tag: "FOOD DELIVERY", price: "Rs 150", meta: "3.2 km • 45m ago" },
  { title: "Inverter Battery Check", tag: "REPAIR", price: "Rs 300", meta: "1.5 km • 2h ago" },
  { title: "Kirana Shop Run", tag: "ERRANDS", price: "Rs 100", meta: "0.8 km • 3h ago" },
];

const threads = [
  { name: "Priya Sharma", topic: "GROCERIES", msg: "I'm heading to the market now, send your list.", time: "2m ago" },
  { name: "Rahul Verma", topic: "GARDENING", msg: "Thanks for the plants! My balcony looks great.", time: "1h ago" },
  { name: "Anjali Patel", topic: "PET SITTING", msg: "Is the key with the security guard? I'll be there at 7.", time: "Yesterday" },
  { name: "Vikram Kumar", topic: "CAR REPAIR", msg: "I've got tools you need. Come by after 6 PM.", time: "Tue" },
];

function Phone({ children }) {
  return (
    <View style={styles.phone}>
      <View style={styles.statusRow}>
        <Text style={styles.statusText}>9:41</Text>
        <Text style={styles.statusText}>5G • 100%</Text>
      </View>
      {children}
    </View>
  );
}

function Login() {
  return (
    <Phone>
      <Text style={styles.title}>Namaste, Neighbor</Text>
      <Text style={styles.muted}>Log in to start helping your community.</Text>
      <TextInput style={styles.input} defaultValue="+91 98765 43210" placeholderTextColor="#7f99c5" />
      <TextInput style={styles.input} secureTextEntry defaultValue="12345678" placeholderTextColor="#7f99c5" />
      <TouchableOpacity style={styles.cta}><Text style={styles.ctaText}>Log In</Text></TouchableOpacity>
    </Phone>
  );
}

function Signup() {
  return (
    <Phone>
      <Text style={styles.title}>Welcome Neighbor!</Text>
      <Text style={styles.muted}>Join the local circle.</Text>
      <TextInput style={styles.input} defaultValue="Arjun Sharma" placeholderTextColor="#7f99c5" />
      <TextInput style={styles.input} defaultValue="arjun@example.com" placeholderTextColor="#7f99c5" />
      <TextInput style={styles.input} defaultValue="+91 98765 43210" placeholderTextColor="#7f99c5" />
      <TextInput style={styles.input} secureTextEntry defaultValue="SecurePassword" placeholderTextColor="#7f99c5" />
      <TouchableOpacity style={styles.cta}><Text style={styles.ctaText}>Create Account</Text></TouchableOpacity>
    </Phone>
  );
}

function Location() {
  return (
    <Phone>
      <Text style={styles.title}>Let's find your neighbors</Text>
      <Text style={styles.muted}>Connect with nearby tasks and helpers.</Text>
      <TextInput style={styles.input} placeholder="Search city, neighborhood, or zip..." placeholderTextColor="#7f99c5" />
      <TouchableOpacity style={styles.cta}><Text style={styles.ctaText}>Use Current Location</Text></TouchableOpacity>
    </Phone>
  );
}

function Home() {
  return (
    <Phone>
      <Text style={styles.title}>Task Feed</Text>
      {taskData.map((item) => (
        <View key={item.title} style={styles.card}>
          <View style={styles.cardRow}>
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.muted}>{item.meta}</Text>
        </View>
      ))}
    </Phone>
  );
}

function Sidebar() {
  return (
    <Phone>
      <Text style={styles.title}>Alex Johnson</Text>
      <Text style={styles.muted}>Available for tasks nearby • 4.8 *</Text>
      <View style={styles.menuCard}><Text style={styles.menuText}>My Profile</Text></View>
      <View style={[styles.menuCard, styles.menuActive]}><Text style={styles.menuText}>Active Tasks (3)</Text></View>
      <View style={styles.menuCard}><Text style={styles.menuText}>Payment History</Text></View>
      <View style={styles.menuCard}><Text style={styles.menuText}>My Neighbors</Text></View>
    </Phone>
  );
}

function Messages() {
  return (
    <Phone>
      <Text style={styles.title}>Messages</Text>
      <TextInput style={styles.input} placeholder="Search neighbors..." placeholderTextColor="#7f99c5" />
      {threads.map((t) => (
        <View key={t.name} style={styles.thread}>
          <View style={styles.threadHead}>
            <Text style={styles.cardTitle}>{t.name}</Text>
            <Text style={styles.mutedSmall}>{t.time}</Text>
          </View>
          <Text style={styles.tag}>{t.topic}</Text>
          <Text style={styles.muted}>{t.msg}</Text>
        </View>
      ))}
    </Phone>
  );
}

const screenMap = {
  login: Login,
  signup: Signup,
  location: Location,
  home: Home,
  sidebar: Sidebar,
  messages: Messages,
};

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];
  const Active = useMemo(() => screenMap[step.key], [step]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Local Task App</Text>
        <Text style={styles.mutedSmall}>{`Step ${stepIndex + 1} of ${steps.length}: ${step.label}`}</Text>
      </View>

      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.switchBtn, stepIndex === 0 && styles.switchBtnDisabled]}
          onPress={() => setStepIndex((s) => Math.max(0, s - 1))}
        >
          <Text style={styles.switchText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchBtn}
          onPress={() => setStepIndex((s) => Math.min(steps.length - 1, s + 1))}
        >
          <Text style={styles.switchText}>Next</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        <Active />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#050a19" },
  container: { flex: 1 },
  containerContent: { padding: 16 },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 2 },
  headerTitle: { color: "#e6f0ff", fontSize: 20, fontWeight: "700" },
  statusRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  statusText: { color: "#9ab5df", fontSize: 11 },
  switchRow: { flexDirection: "row", gap: 10, paddingHorizontal: 16, marginBottom: 6 },
  switchBtn: {
    flex: 1,
    backgroundColor: "#2f72ff",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  switchBtnDisabled: { opacity: 0.55 },
  switchText: { color: "#fff", fontWeight: "700" },
  phone: {
    borderWidth: 1,
    borderColor: "#223a70",
    borderRadius: 18,
    backgroundColor: "#081733",
    padding: 14,
  },
  title: { color: "#e6f0ff", fontSize: 28, fontWeight: "700", marginBottom: 6 },
  muted: { color: "#8ca6d3", fontSize: 12, marginBottom: 10 },
  mutedSmall: { color: "#8ca6d3", fontSize: 11 },
  input: {
    borderWidth: 1,
    borderColor: "#25457f",
    backgroundColor: "#10244d",
    color: "#e6f0ff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  cta: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 2,
  },
  ctaText: { color: "#fff", fontWeight: "800" },
  card: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#244174",
    borderRadius: 14,
    backgroundColor: "#10244a",
    padding: 12,
  },
  cardRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  tag: { color: "#9dcbff", fontSize: 10, fontWeight: "800", marginBottom: 5 },
  price: { color: "#ffffff", fontSize: 20, fontWeight: "800" },
  cardTitle: { color: "#e6f0ff", fontSize: 16, fontWeight: "700", marginBottom: 4 },
  menuCard: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#234073",
    borderRadius: 13,
    padding: 12,
    backgroundColor: "#10244c",
  },
  menuActive: { borderColor: "#3b82f6", backgroundColor: "#133266" },
  menuText: { color: "#e6f0ff", fontWeight: "600" },
  thread: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#244373",
    borderRadius: 14,
    backgroundColor: "#122a56",
    padding: 10,
  },
  threadHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});
