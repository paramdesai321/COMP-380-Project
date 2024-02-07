import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            
           <TextInput
           placeholder ="Email"
           onChangeText={text=> setEmail(text)}
           value = {email}
           /> 
            
            <TextInput
            placeholder = "Passoword"
            onChangeText ={text=> setPassword(password)}
            value = {password}
            />      
            <Button title="Login" />
            
            
            
            
          </View>
    )
}

export default Login;