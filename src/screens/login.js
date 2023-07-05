import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { setUsername, logout } from '../actions/authActions';


const LogIn = ({ setUsername, logout, username }) => {
  const smiley = String.fromCodePoint(0x1F603);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check if username and password are not empty
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter a valid email and password');
      return;
    }

    // Check if username and password match stored credentials
    if (email === 'stored_username' && password === 'stored_password') {
      setUsername(email); // Set username in the Redux store
      setError('');
      navigation.navigate('Home'); // Navigate to the home screen
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    logout(); 
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log in/Sign up</Text>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.errorText}>{error}</Text>
      <Button title="Return to Home" color="#007AFF" onPress={() => navigation.navigate('Home')} />
      {username ? (
        <Button title="Logout" color="#007AFF" onPress={handleLogout} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue {smiley}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  // other action mappings
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

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
