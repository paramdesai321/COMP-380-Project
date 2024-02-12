import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BottomNavBar = ({ tabBarVisible }) => {

    if (!tabBarVisible) {
        return null; // If not visible, return null to render nothing
    }

  const [selectedTab, setSelectedTab] = useState('myStats');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    // You can add logic here to navigate to different screens based on the selected tab
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'myStats' && styles.selectedTab]}
        onPress={() => handleTabPress('myStats')}>
        <Icon name="activity" size={24} color="black" style={[selectedTab === 'myStats' && styles.selectedTabIcon]}/>
        <Text style={[styles.tabText]}>My Stats</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Inbox' && styles.selectedTab]}
        onPress={() => handleTabPress('Inbox')}>
        <Icon name="message-circle" size={24} color="black" style={[selectedTab === 'Inbox' && styles.selectedTabIcon]} />
        <Text style={styles.tabText}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Explore' && styles.selectedTab]}
        onPress={() => handleTabPress('Explore')}>
        <Icon name="search" size={24} color="black" style={[selectedTab === 'Explore' && styles.selectedTabIcon]}/>
        <Text style={styles.tabText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Friends' && styles.selectedTab]}
        onPress={() => handleTabPress('Friends')}>
        <Icon name="users" size={24} color="black" style={[selectedTab === 'Friends' && styles.selectedTabIcon]}/>
        <Text style={styles.tabText}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Profile' && styles.selectedTab]}
        onPress={() => handleTabPress('Profile')}>
        <Icon name="user" size={24} color="black" style={[selectedTab === 'Profile' && styles.selectedTabIcon]}/>
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 15
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  tabText: {
    fontSize: 16,
    marginTop: 10
  },
  selectedTabIcon: {
    color: 'green', // Change the color to highlight the selected tab text
  },
});

export default BottomNavBar;
