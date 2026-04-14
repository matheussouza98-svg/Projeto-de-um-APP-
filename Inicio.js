import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function Inicio({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(v => !v)}
        >
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableOpacity>

        {menuVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Inicio');
              }}
            >
              <Text style={[styles.dropdownText, styles.dropdownTextLarge]}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Escala');
              }}
            >
              <Text style={[styles.dropdownText, styles.dropdownTextLarge]}>Escala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Formacao');
              }}
            >
              <Text style={[styles.dropdownText, styles.dropdownTextLarge]}>Formação</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Settings');
              }}
            >
              <Text style={[styles.dropdownText, styles.dropdownTextLarge]}>Configurações</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Seja bem-vindo(a)!</Text>
          <Text style={styles.subtitle}>É um prazer ter você aqui.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#000', marginTop: 8, textAlign: 'center' },
  menuButton: { position: 'absolute', top: 12, left: 12, padding: 8 },
  menuIcon: { color: '#000', fontSize: 26, fontWeight: 'bold' },
  dropdownMenu: {
    position: 'absolute',
    top: 52,
    left: 12,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 10,
    minWidth: 160,
  },
  dropdownItem: { paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  dropdownText: { color: '#000', fontSize: 18, fontWeight: 'normal' },
  dropdownTextLarge: { fontSize: 20, fontWeight: 'normal' },
  logoutButton: { position: 'absolute', top: 12, right: 12, padding: 8, backgroundColor: '#C62828', borderRadius: 6 },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});