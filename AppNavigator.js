import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Signup from './components/SignUp';
// Import other screens here

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name= "SignUp" component={Signup}/>
    
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
