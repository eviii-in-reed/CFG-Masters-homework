import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MyButton from './src/components/myButton';
import CustomButton from './src/components/AnotherButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/home';
import LogIn from './src/screens/login';
import React from 'react';

// stall pages on top of each other
const Stack = createStackNavigator();

export default function App({ navigation }) {
  const smiley = String.fromCodePoint(0x1F603);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomePage}/>
        <Stack.Screen name='login' component={LogIn}/>
      </Stack.Navigator>
    </NavigationContainer>
      // <Text style={styles.text}>My News App</Text>
      //<Text style={styles.text1}>Hello this is an app full of fake news {smiley}</Text>
      //<Text></Text>
      //<Text></Text>
      //<Text></Text>
      //<MyButton title='button1' color = 'green'/>
      //<MyButton title='button2' color = 'blue'/>
      //<MyButton title='button3' color = 'purple'/>
      //<CustomButton color="#E74C3C" title=" click me or regret " />
      //<StatusBar style="auto"/> */}
    // </View>
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
    fontSize: '50',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    textDecorationLine: 'underline',
    margin: 30,
  },
});

