import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';


export default function LogIn({navigation}) {
    const smiley = String.fromCodePoint(0x1F603);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Log in/Sign up</Text>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button 
          title='Return to Home' 
          color="#007AFF" 
          onPress={() => navigation.navigate("home")}>
        </Button>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate("categories")}
        >
          <Text style={styles.buttonText}>Continue {smiley}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8EEDE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      margin: 10,
    },
    text: {
      color: '#000000',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
      textDecorationLine: 'underline',
      margin: 30,
    },
    inputContainer: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding: 10,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    });


