import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import KindOfFoodPage from './src/pages/KindOfFoodPage';
import UsersPage from './src/pages/UsersPage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <KindOfFoodPage /> */}
      <UsersPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
