import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Personalised News Starts Here</Text>
      <Button title='Click to go to login page' color="#007AFF" onPress={() => navigation.navigate("login")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8EEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});