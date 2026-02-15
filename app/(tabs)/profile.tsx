import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

import AppBackground from '../../components/AppBackground';

const ROWS = ['My Profile', 'Active Tasks', 'Payment History', 'My Neighbors'];

export default function ProfileScreen() {
  return (
    <AppBackground>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.sub}>Available for tasks nearby</Text>
        </View>
      </View>

      <View style={styles.rating}>
        <Text style={styles.ratingStars}>★★★★★</Text>
        <Text style={styles.ratingMeta}>4.8 (124 reviews)</Text>
      </View>

      <View style={styles.list}>
        {ROWS.map((r, i) => (
          <TouchableOpacity key={r} style={[styles.row, i === 1 && styles.rowActive]}>
            <Text style={[styles.rowText, i === 1 && styles.rowTextActive]}>{r}</Text>
            <ChevronRight color={i === 1 ? '#bfe0ff' : '#8ca6d3'} size={16} />
          </TouchableOpacity>
        ))}
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#e3a06d',
    borderWidth: 3,
    borderColor: '#2b5188',
    marginRight: 12,
  },
  name: { color: '#e6f0ff', fontSize: 28, fontWeight: '700' },
  sub: { color: '#8ca6d3', fontSize: 12, marginTop: 2 },
  rating: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#28457a',
    backgroundColor: '#0f2147',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingStars: { color: '#ffd777', fontWeight: '700', fontSize: 12 },
  ratingMeta: { color: '#d7e7ff', fontSize: 12 },
  list: { marginTop: 10 },
  row: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#223a70',
    backgroundColor: '#10244c',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowActive: { borderColor: '#3b82f6', backgroundColor: '#133266' },
  rowText: { color: '#d0e3ff', fontSize: 14, fontWeight: '600' },
  rowTextActive: { color: '#bfe0ff' },
});
