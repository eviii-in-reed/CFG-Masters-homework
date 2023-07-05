import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MyButton from './src/components/myButton';
import CustomButton from './src/components/AnotherButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/home';
import LogIn from './src/screens/login';
import Categories from './src/screens/categories';
import NewsDisplay from './src/screens/newsDisplay';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import rootReducer from './src/reducers/rootReducer';


const Stack = createStackNavigator();

function reducer(state, action) {
	if (action.type === "changeUsername") {
		return { username: action.payload };
	} else {
		return state;
	}
}

const store = createStore(rootReducer);


export default function App({ navigation }) {
  const smiley = String.fromCodePoint(0x1F603);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomePage}/>
          <Stack.Screen name='login' component={LogIn}/>
          <Stack.Screen name='categories' component={Categories}/>
          <Stack.Screen name='display' component={NewsDisplay}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

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

