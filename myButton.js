import { View, Button, Alert } from 'react-native';

export default function MyButton({title, color}) {
  function randomSong() {
    return Alert.alert('Somebody once told me the world...');
  }

  return (
    <View>
      <Button 
        title={title}
        color={color}
        onPress={randomSong} 
      />
    </View>
  );
}