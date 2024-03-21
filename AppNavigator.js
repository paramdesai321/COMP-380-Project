import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Signup from './components/SignUp';
import SplashScreen from './components/SplashScreen';
import MyStats from './components/MyStats';
import BottomNavBar from './components/BottomNavBar';

import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import Profile from './components/Profile';


// Import other screens here

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name ="SplashScreen" 
        component={SplashScreen}
        options={{
          title: 'Harmony',
          tabBarVisible: false,
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Login" component={Login} 
        options={{
          title: 'Login',
          tabBarVisible: false,
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name= "SignUp" component={Signup}
          options={{
            title: 'Create an account',
            tabBarVisible: false,
            headerStyle: {
              backgroundColor: 'yellow',
              
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        
        />
        <Stack.Screen name= "MyStats" component={MyStats}
          options={{
            title: 'My Stats',
            tabBarVisible: true,
            // headerStyle: {
            //   backgroundColor: 'yellow',
            // },
          }}
        
        />
        <Stack.Screen name= "Profile" component={Profile}
          options={{
            title: 'Profile',
            tabBarVisible: true,
            // headerStyle: {
            //   backgroundColor: 'yellow',
            // },
          }}
        
        />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'Yellow'
  }

});


export default AppNavigator;
