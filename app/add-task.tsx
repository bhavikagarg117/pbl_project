import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import AppBackground from '../components/AppBackground';

export default function AddTaskScreen() {
  const router = useRouter();

  return (
    <AppBackground>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Add New Task</Text>
        <Text style={styles.subtitle}>Post what you need and nearby helpers can respond quickly.</Text>

        <View style={styles.field}>
          <Text style={styles.label}>TASK TITLE</Text>
          <TextInput style={styles.input} placeholder="e.g. Need AC service today" placeholderTextColor="#7f99c5" />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>CATEGORY</Text>
          <TextInput style={styles.input} placeholder="Repairs / Errands / Food..." placeholderTextColor="#7f99c5" />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>BUDGET</Text>
          <TextInput style={styles.input} placeholder="₹500" placeholderTextColor="#7f99c5" keyboardType="numeric" />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>DESCRIPTION</Text>
          <TextInput
            style={[styles.input, styles.inputArea]}
            placeholder="Add details for helpers..."
            placeholderTextColor="#7f99c5"
            multiline
            textAlignVertical="top"
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.ghostBtn} onPress={() => router.back()}>
            <Text style={styles.ghostText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryText}>Post Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: 8, paddingBottom: 24 },
  title: { color: '#e6f0ff', fontSize: 32, fontWeight: '700' },
  subtitle: { color: '#8ca6d3', marginTop: 6, marginBottom: 18, fontSize: 13 },
  field: { marginBottom: 12 },
  label: { color: '#8ca6d3', fontSize: 11, fontWeight: '700', marginBottom: 8, letterSpacing: 1 },
  input: {
    borderWidth: 1,
    borderColor: '#223a70',
    borderRadius: 12,
    backgroundColor: '#101f44',
    color: '#e6f0ff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
  },
  inputArea: { minHeight: 110 },
  row: { flexDirection: 'row', gap: 8, marginTop: 8 },
  ghostBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#223a70',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#10244c',
  },
  ghostText: { color: '#d0e3ff', fontWeight: '700' },
  primaryBtn: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#3b82f6',
  },
  primaryText: { color: '#fff', fontWeight: '700' },
});
