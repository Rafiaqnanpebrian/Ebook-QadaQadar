import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import IMAGES from '../../assets/image';
import {ebook} from '../../styles/colors';
import {scale} from '../../utils/scaling';

export default function Ciri({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
        <View>
          <Image source={IMAGES.materi1} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            1. Selalu sadar dan menerima kenyataan.{'\n'}
            2. Selalu bersabar.{'\n'}
            3. Rajin dalam berusaha dan tidak mudah menyerah.{'\n'}
            4. Bersikap optimis, bukan pesimis.{'\n'}
            5. Senantiasa bersikap tawakal.{'\n'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ebook.white,
  },
  image: {
    height: scale(230),
    width: scale(250),
    marginTop: scale(25),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
  },
  text: {
    fontSize: scale(18),
    color: ebook.black,
  },
});
