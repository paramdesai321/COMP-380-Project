import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet,Text} from 'react-native';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>

           <Text>Email</Text> 
           <TextInput style={styles.input}
           title = "Email"
           placeholder ="Email"
           onChangeText={text=> setEmail(text)}
           value = {email}
           /> 
            <Text>Passoword</Text>
            <TextInput style={styles.input}
            placeholder = "Passoword"
            onChangeText ={text=> setPassword(text)}
            value = {password}
            secureTextEntry={true}
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