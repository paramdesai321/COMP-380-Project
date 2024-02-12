import React, {useState} from 'react';
import {View, TextInput, Button, TouchableOpacity, StyleSheet,Text, ImageBackground} from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';





const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin= async()=>{
      if(!email | !password){
        Alert.alert('Error','Please fill in all fields');
        return; 
      }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.error('User signed in successfully!');
          } catch (error) {
            console.error('Not in the database', error.message);
          }


    };

     const handleSignUp=()=>{
      
      navigation.navigate('SignUp');
     }

     const buttonOpacity =  password && email ? 1 : 0.5;

    

    return(
        <View style={styles.container}>

           <Text>Email</Text> 
           <TextInput style={styles.input}
           title = "Email"
           placeholder ="Email"
           onChangeText={text=> setEmail(text)}
           value = {email}
           /> 
            <Text>Password</Text>
            <TextInput style={styles.input}
            placeholder = "Password"
            onChangeText ={text=> setPassword(text)}
            value = {password}
            secureTextEntry={true}
            />      
        <TouchableOpacity
      //  onPress = {onPressLogin}
      onPress={handleLogin}
      style={[styles.button, { opacity: buttonOpacity }]}>
        
        <Text style={styles.buttonText}>LOGIN </Text>
        </TouchableOpacity>     
        <TouchableOpacity
      //  onPress = {onPressLogin}
        onPress={handleSignUp}
        style={[styles.button, { opacity: buttonOpacity }]}>
        
        
        <Text style={styles.buttonText}>Sign up </Text>
        </TouchableOpacity>           
          
          </View>

        
    );
};

    const styles = StyleSheet.create({
        container:{
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
          loginbtn:{
                backgroundColor:'blue',
                  color:'white',
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
       
         
        
       
        


export default Login;