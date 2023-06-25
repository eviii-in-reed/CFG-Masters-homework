// CustomButton.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

function CustomButton(props) {
  return (
    <View>
      <TouchableOpacity style={{ backgroundColor: props.color }}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
