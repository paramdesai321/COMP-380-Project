import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyStatsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>My Stats</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Walk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.workout}>
        <Text style={styles.workoutTitle}>Fullbody Workout</Text>
        <Text style={styles.workoutSubtitle}>Today, 03:00pm</Text>
        <Text>1673 steps</Text>
      </TouchableOpacity>

      <View style={styles.workout}>
        <Text style={styles.workoutTitle}>Upperbody Workout</Text>
        <Text style={styles.workoutSubtitle}>June 05, 02:00pm</Text>
      </View>

      <View style={styles.workout}>
        <Text style={styles.workoutTitle}>Bicep Workout</Text>
        <Text style={styles.workoutSubtitle}>June 15, 07:00pm</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calories</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Carbs</Text>
            <Text>30g</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Fat</Text>
            <Text>23g</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Protein</Text>
            <Text>70g</Text>
          </View>
        </View>
        <Text>23 oz</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medication</Text>
        <Text>430 kcal</Text>
        <Text>Omega3 1 tablet after meal</Text>
        <Text>Aspirin 1 tablet after meal</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  workout: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  column: {
    flex: 1,
  },
  columnTitle: {
    fontWeight: 'bold',
  },
});

export default MyStatsPage;
