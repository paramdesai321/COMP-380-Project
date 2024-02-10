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
        style={styles.loginbtn} onPress={handleLogin}>
        
        <Text style={styles.loginbtn}>LOGIN </Text>
        </TouchableOpacity>     
        <TouchableOpacity
      //  onPress = {onPressLogin}
        style={styles.loginbtn} onPress={handleSignUp}>
        
        
        <Text style={styles.loginbtn}>Sign up </Text>
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
          }
       });
       
         
        
       
        


export default Login;