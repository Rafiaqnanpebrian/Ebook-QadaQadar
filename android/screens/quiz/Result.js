import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StatusBar,
  Button,
  StyleSheet,
} from 'react-native';
import {scale} from '../../utils/scaling';
import {ebook} from '../../styles/colors';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const _toPembahasan = () => {
      this.props.navigation.navigate('Pembahasan');
    };

    const _goHome = () => {
      AsyncStorage.removeItem('id');
      this.props.navigation.navigate('Home');
    };

    const point = this.props.navigation.getParam('point', 0);
    const result = parseFloat(point).toFixed(1);
    const wrong = this.props.navigation.getParam('wrong', 0);
    const correct = this.props.navigation.getParam('correct', 0);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
        <View>
          <Text>
            {point > 70 ? 'Hebat!, Selamat Ya' : 'Tetap Semangatt!!!'}
          </Text>
          <View>
            <Text>{result}</Text>
            <Text>Skormu</Text>
          </View>
          <View style={styles.corwrong}>
            <View style={styles.correct}>
              <View style={styles.kotak}>
                <Text style={styles.textCorrect}>{correct}</Text>
              </View>
              <Text style={styles.text}>Benar</Text>
            </View>
            <View style={styles.wrong}>
              <View style={styles.kotak2}>
                <Text style={styles.textWrong}>{wrong}</Text>
              </View>
              <Text style={styles.text}>Salah</Text>
            </View>
          </View>
          <Button
            type="raised-ripple"
            title="Pembahasan"
            onPress={_toPembahasan}
            style={styles.btn}
            customText={styles.textBtn}
          />
          <Button
            type="raised-ripple"
            title="Back to Home"
            onPress={_goHome}
            style={styles.btnHome}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ebook.white,
  },
  Header: {
    height: scale(70),
    width: scale(350),
    backgroundColor: ebook.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scale(14),
    borderBottomRightRadius: scale(14),
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.white,
  },
  choose: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  great: {
    fontSize: scale(36),
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  score: {
    fontSize: scale(20),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  point: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  result: {
    fontSize: scale(100),
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  name: {
    fontSize: scale(24),
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  corwrong: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(30),
  },
  correct: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(30),
    marginVertical: scale(10),
  },
  textCorrect: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  wrong: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(30),
    marginVertical: scale(10),
  },
  textWrong: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  kotak: {
    flexDirection: 'row',
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ebook.nilai,
  },
  kotak2: {
    flexDirection: 'row',
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ebook.btnLogin,
  },
  text: {
    fontSize: scale(18),
    marginTop: scale(10),
  },
  btn: {
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    backgroundColor: ebook.btnLogin,
    borderRadius: scale(12),
    marginBottom: scale(10),
  },
  textBtn: {
    color: ebook.white,
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  register: {
    backgroundColor: ebook.white,
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    borderRadius: scale(12),
    borderColor: ebook.logo,
    borderWidth: scale(1),
  },
  textRegister: {
    color: ebook.btnLogin,
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  btnHome: {
    width: scale(250),
    height: scale(70),
    color: ebook.btnLogin,
    fontSize: scale(16),
  },
});
