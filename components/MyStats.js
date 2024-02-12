import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';

const MyStats = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.welcomeText}>My Stats</Text>
      <BottomNavBar tabBarVisible={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyStats;
