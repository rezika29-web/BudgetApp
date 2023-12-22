import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const Navigation = useNavigation();
  const handleNavigationRegister = () => {
    // @ts-ignore //ini perlu agak tidak ada garis merah
    Navigation.navigate('Register');
  };
  const handleNavigationHome = async () => {
    try {
      const response = await axios.post(
        'https://zq9gnjcq-8080.asse.devtunnels.ms/api/auth/signin',
        {
          username,
          password,
        },
      );
      console.log(response.data);
      await AsyncStorage.setItem('username', response.data.username);
      await AsyncStorage.setItem('userId', response.data.userId.toString());
      Navigation.navigate('Router');
      // Simpan token atau lakukan tindakan lain sesuai kebutuhan aplikasi
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Login failed', error.message);
      Alert.alert('Login Failed', 'Please check your username and password.');
    }
  };

  return (
    <View style={styles.constainer}>
      <View style={styles.forms}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          secureTextEntry
          value={password}
          placeholder="Password"
          placeholderTextColor={'black'}
        />
        <TouchableOpacity
          style={styles.registerbutton}
          onPress={handleNavigationHome}>
          <Text style={styles.registertext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
          <Text style={styles.googletext}>Login with Google</Text>
        </TouchableOpacity>
        <Text style={styles.logintext}>
          Create Your Account account?
          {/* <Text style={styles.login}> Login</Text> */}
          <Text style={styles.login} onPress={handleNavigationRegister}>
            {' '}
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  forms: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#dfdfdf',
    marginTop: 375,
    flex: 1,
    padding: '5%',
  },
  title: {
    color: 'blue',
    fontSize: 23,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 5,
  },
  registerbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    borderRadius: 5,
    width: '94%',
    marginLeft: 10,
    marginTop: 10,
  },
  registertext: {
    color: 'white',
  },
  google: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    width: '94%',
    marginLeft: 10,
    marginTop: 20,
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  googletext: {
    color: 'blue',
  },
  logintext: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  login: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
export default Login;
