import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CirclePlus, Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';

import AppBackground from '../../components/AppBackground';

const CATEGORIES = ['Repairs', 'Food', 'Errands', 'Pet Care'];

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <AppBackground noPadding>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Explore</Text>
            <Text style={styles.subtitle}>Discover neighbors and tasks near you.</Text>
          </View>
          <TouchableOpacity style={styles.addTaskBtn} onPress={() => router.push('/add-task')}>
            <CirclePlus color="#ffffff" size={16} />
            <Text style={styles.addTaskText}>Add Task</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.search}>
          <Search color="#8ca6d3" size={16} />
          <Text style={styles.searchText}>Search people, skills, or categories</Text>
        </TouchableOpacity>

        <View style={styles.pills}>
          {CATEGORIES.map((item, idx) => (
            <View key={item} style={[styles.pill, idx === 0 && styles.pillActive]}>
              <Text style={[styles.pillText, idx === 0 && styles.pillTextActive]}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Plumber Available</Text>
          <Text style={styles.cardBody}>Ravi Kumar • 1.2 km away • 4.9 rating</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cooked Meal Delivery</Text>
          <Text style={styles.cardBody}>Nisha Tiffins • 2.8 km away • 4.7 rating</Text>
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingHorizontal: 18, paddingTop: 14, paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  title: { color: '#e6f0ff', fontSize: 30, fontWeight: '700' },
  subtitle: { color: '#8ca6d3', marginTop: 6, marginBottom: 14 },
  addTaskBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#3b82f6',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 4,
  },
  addTaskText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  search: {
    borderWidth: 1,
    borderColor: '#223a70',
    backgroundColor: '#101f44',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchText: { color: '#8ca6d3', fontSize: 13 },
  pills: { flexDirection: 'row', marginTop: 12, marginBottom: 8, flexWrap: 'wrap', gap: 8 },
  pill: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#223a70',
    backgroundColor: '#101f44',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  pillActive: { backgroundColor: 'rgba(59,130,246,0.22)', borderColor: '#4f9fff' },
  pillText: { color: '#8ca6d3', fontSize: 12, fontWeight: '700' },
  pillTextActive: { color: '#bfe0ff' },
  card: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#223a70',
    borderRadius: 14,
    backgroundColor: '#10244c',
    padding: 14,
  },
  cardTitle: { color: '#e6f0ff', fontSize: 17, fontWeight: '700' },
  cardBody: { color: '#8ca6d3', marginTop: 4, fontSize: 13 },
});
