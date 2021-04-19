import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

import Button from '../components/Button';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

     {/*  <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity> */}

      <Button title="Go"/>
    </SafeAreaView>
  );
}

export default Welcome;


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  subTitle:{
    color: colors.body_light,
    textAlign: 'center',
    paddingHorizontal: 80
  },
  button: {
    backgroundColor: colors.green,
    width: 76,
    height: 76,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.white,
  }
})