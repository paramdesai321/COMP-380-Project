import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig';
//import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
   if(!email | !password){
        Alert.alert('Error','Please fill in all fields');
        return; 
   }
   try{
    const response = await createUserWithEmailAndPassword(auth,email,password);
    console.log(response);
   }
   catch(error){
    console.log(error);
    alert('Sign In has failed:'+ error.message);
   }

  };

  const handleLogin=()=>{
    navigation.navigate('Login');
    }

  
  const buttonOpacity =  password && email ? 1 : 0.5;

  return (
    <View style={styles.container}>
     <Text>Enter your email</Text>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
        keyboardType="email-address"
      />
      <Text>Create a Password</Text>
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, { opacity: buttonOpacity }]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, { opacity: buttonOpacity }]}>
        <Text style={styles.buttonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default SignUp;
