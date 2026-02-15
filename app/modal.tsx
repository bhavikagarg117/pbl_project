import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BadgeCheck, ChevronRight, LogOut, UserRound, Wallet, X } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MENU_ITEMS = [
  { id: 'profile', label: 'My Profile', icon: UserRound },
  { id: 'tasks', label: 'Active Tasks', icon: BadgeCheck, active: true, badge: '3' },
  { id: 'payments', label: 'Payment History', icon: Wallet },
];

export default function ModalScreen() {
  const router = useRouter();
  const panelX = useRef(new Animated.Value(-26)).current;
  const panelOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(panelX, {
        toValue: 0,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.timing(panelOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [panelOpacity, panelX]);

  const close = () => {
    Animated.parallel([
      Animated.timing(panelX, {
        toValue: -18,
        duration: 140,
        useNativeDriver: true,
      }),
      Animated.timing(panelOpacity, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start(() => router.back());
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.backdrop} onPress={close} />

      <Animated.View style={[styles.panel, { opacity: panelOpacity, transform: [{ translateX: panelX }] }]}>
        <View style={styles.headerRow}>
          <View style={styles.userRow}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.name}>Alex Johnson</Text>
              <Text style={styles.subtle}>Available for tasks nearby</Text>
            </View>
          </View>
          <TouchableOpacity onPress={close} style={styles.closeBtn}>
            <X color="#d8e6ff" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingWrap}>
          <Text style={styles.ratingText}>★★★★★</Text>
          <Text style={styles.ratingMeta}>4.8 (124 reviews)</Text>
        </View>

        <View style={styles.menuList}>
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.menuItem, item.active && styles.menuItemActive]}
                onPress={() => {}}>
                <View style={styles.menuLeft}>
                  <Icon color={item.active ? '#bfe0ff' : '#c9ddff'} size={16} />
                  <Text style={[styles.menuLabel, item.active && styles.menuLabelActive]}>{item.label}</Text>
                </View>
                {item.badge ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                ) : (
                  <ChevronRight color="#7ea1d6" size={16} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <LinearGradient colors={['#1d5ac0', '#2d8aff']} style={styles.proCard}>
          <Text style={styles.proTitle}>Become a Verified Pro</Text>
          <Text style={styles.proCopy}>Get more visibility and unlock higher-value tasks.</Text>
          <TouchableOpacity style={styles.proButton} onPress={() => {}}>
            <Text style={styles.proButtonText}>Upgrade Now</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity style={styles.logout} onPress={close}>
          <LogOut color="#ffb0b0" size={16} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 8, 22, 0.45)',
  },
  panel: {
    width: '84%',
    maxWidth: 360,
    height: '100%',
    backgroundColor: '#091933',
    borderRightWidth: 1,
    borderRightColor: '#234073',
    paddingTop: 58,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  userRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#2b5188',
    backgroundColor: '#e3a06d',
  },
  name: {
    color: '#e6f0ff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  subtle: {
    color: '#8ca6d3',
    marginTop: 2,
    fontSize: 12,
  },
  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10244d',
    borderWidth: 1,
    borderColor: '#28457a',
  },
  ratingWrap: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#28457a',
    borderRadius: 12,
    backgroundColor: '#0f2147',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    color: '#ffd777',
    fontSize: 12,
    fontWeight: '700',
  },
  ratingMeta: {
    color: '#d7e7ff',
    fontSize: 12,
  },
  menuList: {
    marginTop: 14,
    gap: 8,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: '#234073',
    borderRadius: 13,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#10244c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemActive: {
    borderColor: '#3b82f6',
    backgroundColor: '#133266',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuLabel: {
    color: '#d0e3ff',
    fontWeight: '600',
    fontSize: 14,
  },
  menuLabelActive: {
    color: '#bfe0ff',
  },
  badge: {
    minWidth: 24,
    borderRadius: 999,
    backgroundColor: '#2f72ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  proCard: {
    marginTop: 16,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#2f72ff',
    padding: 12,
  },
  proTitle: {
    color: '#eef5ff',
    fontWeight: '700',
    fontSize: 16,
  },
  proCopy: {
    color: '#cde4ff',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  proButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  proButtonText: {
    color: '#1d5ac0',
    fontWeight: '700',
    fontSize: 12,
  },
  logout: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#4a3a4f',
    backgroundColor: '#201f2b',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoutText: {
    color: '#ffc0c0',
    fontWeight: '700',
    fontSize: 13,
  },
});
