import React, {useState} from 'react';
import {view, TextInput, Button, StyleSheet} from 'react-native';

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
            
            
            
            
            
            
          </View>
    )













}