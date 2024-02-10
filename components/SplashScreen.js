import {View, TextInput, Button, TouchableOpacity, StyleSheet,Text, ImageBackground,Style} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SplashScreen=()=>{

   // const buttonOpacity =  password && email ? 1 : 0.5;
    const navigation= useNavigation();
   const handleLogin=()=>{
     navigation.navigate('Login');
   }

   const handleSignUp=()=>{
    navigation.navigate('SignUp');
  }

   

return(

<View style={styles.container}>
<TouchableOpacity
onPress={handleLogin}
style={styles.button}
>


<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={handleSignUp}
style={styles.button}
>


<Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>

</View>


);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
  });



export default SplashScreen;

