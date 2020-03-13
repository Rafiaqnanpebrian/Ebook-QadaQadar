import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  TextInput,
  ToastAndroid,
  Button,
} from 'react-native';
import Logo from '../../assets/svgs/Logo';
import axios from 'axios';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _register = () => {
    navigation.navigate('Register');
  };

  const _logIn = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (email.length === 0) {
      Alert.alert('Notification', 'Email Required');
    }
    if (password.length === 0) {
      Alert.alert('Notification', 'Password Required');
    } else {
      try {
        axios
          .post('http://3.92.200.123:9000/api/users/v1', data, {
            headers: {
              Authorization: 'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=',
            },
          })
          .then(response => {
            AsyncStorage.setItem('access_token', response.data);
            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
            navigation.navigate('AppScreen');
          })
          .catch(err => {
            ToastAndroid.show(String(err), ToastAndroid.SHORT);
            ToastAndroid.show(email, ToastAndroid.SHORT);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Logo style={styles.logo} />
      </View>
      <TextInput
        placeholder="Email"
        underlineColorAndroid="transparent"
        keyboardType="email-address"
        value={email}
        style={styles.input}
        onChangeText={value => setEmail(value)}
        isRequired
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCompleteType="password"
        underlineColorAndroid="transparent"
        value={password}
        style={styles.inputPass}
        onChangeText={value => setPassword(value)}
        isRequired
      />
      <Button
        type="raised-ripple"
        title="Login"
        onPress={_logIn}
        customContainer={styles.btn}
        customText={styles.btnText}
      />
      <Text style={styles.t_register}>{email}</Text>

      <Button
        type="raised-ripple"
        title="Daftar"
        onPress={_register}
        customContainer={styles.register}
        customText={styles.textRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
