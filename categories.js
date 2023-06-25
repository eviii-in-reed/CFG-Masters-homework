import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

const categories = [
    {label: "General", value: "general"},
    {label: "Wolrd", value: "world"},
    {label: "Nation", value: "nation"},
    {label: "Business", value: "business"},
    {label: "Technology", value: "technology"},
    {label: "Entertainment", value: "entertainment"},
    {label: "Sports", value: "sports"},
    {label: "Science", value: "science"},
    {label: "Health", value: "health"},
];

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your favourite news categories</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.value}
          onPress={() => handleCategorySelection(category.value)}
        >
          <Text style={styles.buttonText}>{category.label}</Text>
        </TouchableOpacity>
      ))}
      <Button title='Continue' color="#007AFF" onPress={() => navigation.navigate("display")}></Button>
    </View>
  );
}
  
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F8EEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
  },
  button: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  continueButton: {},
}