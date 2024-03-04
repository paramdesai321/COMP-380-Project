import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

const MyStats = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Stats</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Dashboard</Text>
                {/* Add dashboard content here */}
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Journal</Text>
                {/* Add journal content here */}
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Walk</Text>
                <Text style={styles.cardValue}>1673 steps</Text>
            </View>
<View style={styles.card}>
                <Text style={styles.cardTitle}>Journal</Text>
                {/* Add journal content here */}
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Walk</Text>
                <Text style={styles.cardValue}>1673 steps</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Workout</Text>
                {/* Add workout content here */}
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Water</Text>
                <Text style={styles.cardValue}>23oz</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Calories</Text>
                <Text style={styles.cardValue}>430 kcal</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Medication</Text>
                {/* Add medication content here */}
            </View>
        </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardValue: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});
export default MyStats;
