import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {ebook} from '../styles/colors';
import IMAGE from '../assets/image';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: ebook.btnNext,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleCorrect: {
    backgroundColor: ebook.btnNilai,
  },
  icon: {
    width: screen.width / 3,
  },
});

export const Alert = ({correct, visible}) => {
  if (!visible) return null;

  const icon = correct ? IMAGE.Correct : IMAGE.Close;

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
