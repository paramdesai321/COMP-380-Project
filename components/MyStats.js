import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

const MyStats = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>My Stats</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text>Journal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Walk</Text>
          <Text style={styles.cardValue}>1673 steps</Text>
          <FontAwesomeIcon icon={faPlus} style={styles.icon} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Workout</Text>
          {/* Add your workout items here */}
          <FontAwesomeIcon icon={faPlus} style={styles.icon} />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Water</Text>
          <Text style={styles.cardValue}>23oz</Text>
          <FontAwesomeIcon icon={faPlus} style={styles.icon} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>430 kcal</Text>
          {/* Add your macro-nutrient items here */}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medication</Text>
          {/* Add your medication items here */}
          <FontAwesomeIcon icon={faPlus} style={styles.icon} />
        </View>
      </View>
      <BottomNavBar tabBarVisible={true}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '45%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  //more styles as needed
});

export default MyStats;
