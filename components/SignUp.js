import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Alert} from 'react-native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSignUp = () => {
   if(!email | !password){
        Alert.alert('Error','Please fill in all fields');
        return;
   }
  };

  // Calculate opacity based on input fields
  const buttonOpacity = username && password && email ? 1 : 0.5;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
        keyboardType="email-address"
      />
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
