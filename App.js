import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from './components/BottomNavBar';
import AppNavigator from './AppNavigator'; // Import your AppNavigator component

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator /> 
      <StatusBar style="auto" />
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
