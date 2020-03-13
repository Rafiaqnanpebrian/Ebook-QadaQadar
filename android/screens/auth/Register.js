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

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [nis, setNis] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _toLogin = () => {
    navigation.navigate('Login');
  };

  const _register = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    if (name.length === 0) {
      Alert.alert('Notification', 'Name Required');
    }
    if (nis.length === 0) {
      Alert.alert('Notification', 'Nis Required');
    }
    if (email.length === 0) {
      Alert.alert('Notification', 'Email Required');
    }
    if (password.length === 0) {
      Alert.alert('Notification', 'Password Required');
    } else {
      try {
        axios
          .post('http://3.92.200.123:9000/api/users/v1/register', data, {
            headers: {
              Authorization: 'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=',
            },
          })
          .then(response => {
            AsyncStorage.setItem('access_token', response.data);
            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
            navigation.navigate('Login');
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
        placeholder="Name"
        underlineColorAndroid="transparent"
        value={name}
        autoCompleteType="username"
        style={styles.input}
        onChangeText={value => setName(value)}
        isRequired
      />
      <TextInput
        placeholder="NIS"
        underlineColorAndroid="transparent"
        autoCompleteType="cc-number"
        keyboardType="numeric"
        value={nis}
        style={styles.input}
        onChangeText={value => setNis(value)}
        isRequired
      />
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
        onPress={_register}
        customContainer={styles.btn}
        customText={styles.btnText}
      />
      <Text style={styles.t_register}>{email}</Text>

      <Button
        type="raised-ripple"
        title="Daftar"
        onPress={_toLogin}
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
