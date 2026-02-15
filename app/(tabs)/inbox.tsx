import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Edit3 } from 'lucide-react-native';

import AppBackground from '../../components/AppBackground';

const THREADS = [
  { name: 'Priya Sharma', topic: 'Groceries', msg: "I'm heading to the market now, send your list.", time: '2m' },
  { name: 'Rahul Verma', topic: 'Gardening', msg: 'Thanks for the plants. My balcony looks great!', time: '1h' },
  { name: 'Anjali Patel', topic: 'Pet Sitting', msg: "I'll be there by 7 PM. Is the key at the gate?", time: 'Yesterday' },
];

export default function InboxScreen() {
  return (
    <AppBackground noPadding>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity style={styles.compose}>
            <Edit3 color="#cfe3ff" size={16} />
          </TouchableOpacity>
        </View>

        {THREADS.map((t) => (
          <View key={t.name} style={styles.thread}>
            <View style={styles.avatar} />
            <View style={styles.threadBody}>
              <View style={styles.threadHead}>
                <Text style={styles.name}>{t.name}</Text>
                <Text style={styles.time}>{t.time}</Text>
              </View>
              <Text style={styles.topic}>{t.topic.toUpperCase()}</Text>
              <Text style={styles.msg} numberOfLines={1}>
                {t.msg}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingHorizontal: 18, paddingTop: 14, paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: '#e6f0ff', fontSize: 30, fontWeight: '700' },
  compose: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#223a70',
    backgroundColor: '#10244c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thread: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#223a70',
    backgroundColor: '#10244c',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f2b07d',
    borderWidth: 2,
    borderColor: '#2b5188',
    marginRight: 10,
  },
  threadBody: { flex: 1 },
  threadHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { color: '#e6f0ff', fontSize: 15, fontWeight: '700' },
  time: { color: '#8ca6d3', fontSize: 11 },
  topic: { color: '#9ec7ff', fontSize: 10, fontWeight: '700', marginTop: 2 },
  msg: { color: '#8ca6d3', fontSize: 12, marginTop: 4 },
});
