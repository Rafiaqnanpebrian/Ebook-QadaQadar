import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ebook} from '../styles/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: ebook.bgModule,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  text: {
    color: ebook.white,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export const Button = ({text, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
