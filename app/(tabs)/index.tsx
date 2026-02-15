import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "lucide-react-native";
import { useRouter } from "expo-router";

import AppBackground from "../../components/AppBackground";

type TaskCardProps = {
  title: string;
  tag: string;
  price: string;
  desc: string;
  urgent?: boolean;
};

function TaskCard({ title, tag, price, desc, urgent = false }: TaskCardProps) {
  const onAccept = () => {
    Alert.alert("Task accepted", `You accepted: ${title}`);
  };

  return (
    <View style={[styles.card, urgent ? styles.cardUrgent : styles.cardNormal]}>
      <View style={styles.cardHead}>
        <View style={[styles.tagPill, urgent ? styles.tagUrgentBg : styles.tagFoodBg]}>
          <Text style={[styles.tagText, urgent ? styles.tagUrgentText : styles.tagFoodText]}>{tag}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>

      <View style={styles.cardFoot}>
        <Text style={styles.meta}>0.4 km • 10m ago</Text>
        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>Accept Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const [distance, setDistance] = React.useState("5km");
  const [category, setCategory] = React.useState("All Tasks");

  const distances = ["2km", "5km", "10km"];
  const categories = ["All Tasks", "Tiffin", "House Help", "Repairs"];

  return (
    <AppBackground noPadding>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/modal")}>
            <Menu color="#e6f0ff" size={20} />
          </TouchableOpacity>

          <View style={styles.locationWrap}>
            <Text style={styles.locationLabel}>CURRENT LOCATION</Text>
            <Text style={styles.locationText}>Indiranagar, Bangalore</Text>
          </View>

          <View style={styles.avatar} />
        </View>

        <View style={styles.distanceRow}>
          {distances.map((d) => (
            <TouchableOpacity
              key={d}
              onPress={() => setDistance(d)}
              style={[styles.distancePill, d === distance ? styles.distanceActive : styles.distanceIdle]}>
              <Text style={[styles.distanceText, d === distance ? styles.distanceTextActive : styles.distanceTextIdle]}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategory(cat)}
              style={[styles.categoryPill, cat === category ? styles.categoryActive : styles.categoryIdle]}>
              <Text style={[styles.categoryText, cat === category ? styles.categoryTextActive : styles.categoryTextIdle]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TaskCard
          urgent
          tag="URGENT"
          price="₹800"
          title="Urgent AC Repair Needed"
          desc="My Split AC stopped cooling suddenly. Need technician to check gas or compressor."
        />
        <TaskCard
          tag="FOOD DELIVERY"
          price="₹150"
          title="Tiffin Delivery"
          desc="Need someone to pick up home-cooked lunch from Koramangala and drop in HSR layout."
        />
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#223a70",
    backgroundColor: "#101f44",
  },
  locationWrap: {
    alignItems: "center",
  },
  locationLabel: {
    color: "#8ca6d3",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  locationText: {
    color: "#e6f0ff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#223a70",
    backgroundColor: "#f2b07d",
  },
  distanceRow: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
  },
  distancePill: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 9,
    borderRadius: 999,
    marginRight: 8,
  },
  distanceActive: {
    backgroundColor: "#3b82f6",
  },
  distanceIdle: {
    borderWidth: 1,
    borderColor: "#223a70",
    backgroundColor: "#101f44",
  },
  distanceText: {
    fontSize: 12,
    fontWeight: "700",
  },
  distanceTextActive: {
    color: "#ffffff",
  },
  distanceTextIdle: {
    color: "#8ca6d3",
  },
  categoryRow: {
    paddingVertical: 8,
    paddingRight: 6,
  },
  categoryPill: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
  },
  categoryActive: {
    backgroundColor: "rgba(59,130,246,0.22)",
    borderWidth: 1,
    borderColor: "rgba(92,166,255,0.55)",
  },
  categoryIdle: {
    backgroundColor: "#101f44",
    borderWidth: 1,
    borderColor: "#223a70",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "700",
  },
  categoryTextActive: {
    color: "#9ec7ff",
  },
  categoryTextIdle: {
    color: "#8ca6d3",
  },
  card: {
    borderRadius: 16,
    padding: 14,
    marginTop: 10,
  },
  cardUrgent: {
    borderWidth: 1,
    borderColor: "#3b82f6",
    backgroundColor: "#11264d",
  },
  cardNormal: {
    borderWidth: 1,
    borderColor: "#223a70",
    backgroundColor: "#101f44",
  },
  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  tagPill: {
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tagUrgentBg: {
    backgroundColor: "rgba(239,68,68,0.2)",
  },
  tagFoodBg: {
    backgroundColor: "rgba(20,184,166,0.2)",
  },
  tagText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  tagUrgentText: {
    color: "#ff9a9a",
  },
  tagFoodText: {
    color: "#8af0e5",
  },
  price: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800",
  },
  cardTitle: {
    color: "#e6f0ff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 2,
  },
  cardDesc: {
    color: "#8ca6d3",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  cardFoot: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(34,58,112,0.6)",
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  meta: {
    color: "#8ca6d3",
    fontSize: 11,
  },
  acceptBtn: {
    backgroundColor: "#3b82f6",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  acceptText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
});
