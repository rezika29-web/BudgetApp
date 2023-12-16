import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const Navigation = useNavigation();
  const handleNavigationLogin = () => {
    // @ts-ignore //ini perlu agak tidak ada garis merah
    Navigation.navigate('Login');
  };
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <View style={styles.constainer}>
      <View style={styles.forms}>
        <Text style={styles.title}>Track your finance now!</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor={'black'}
        />
        <TouchableOpacity style={styles.registerbutton}>
          <Text style={styles.registertext}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
          <Text style={styles.googletext}>Register with Google</Text>
        </TouchableOpacity>
        <Text style={styles.logintext}>
          Already have an account?
          {/* <Text style={styles.login}> Login</Text> */}
          <Text style={styles.login} onPress={handleNavigationLogin}>
            {' '}
            Login
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
    marginTop: 300,
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
export default Register;
