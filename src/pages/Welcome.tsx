import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {Feather} from '@expo/vector-icons'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Welcome = () => {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('UserIdentity');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode="contain" 
      />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5} 
        onPress={handleNavigation}
      >        
        <Feather name="arrow-right" size={28} color={colors.white}/>        
      </TouchableOpacity>      
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
    fontFamily: fonts.heading,
    lineHeight: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  subTitle:{
    color: colors.body_light,
    textAlign: 'center',
    fontFamily: fonts.text,
    lineHeight: 18,
    fontSize: 17,
    paddingHorizontal: 80,
    marginTop: -10
  },
  button: {
    backgroundColor: colors.green,
    width: 76,
    height: 76,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  image: {
    height: Dimensions.get('window').width * 0.7
  }  
})