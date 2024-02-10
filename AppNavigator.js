import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Signup from './components/SignUp';
import { StyleSheet } from 'react-native';
// Import other screens here

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        title: 'Login',
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
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
