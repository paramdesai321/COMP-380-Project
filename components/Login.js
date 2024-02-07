import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            
           <TextInput style
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
       });
        


export default Login;