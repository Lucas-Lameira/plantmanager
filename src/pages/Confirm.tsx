import React from 'react';
import {  
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import Button from '../components/Button';

export default function Confirm() {  

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.content}>      
        <Text style={styles.emoji}>😆</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <Button title="Começar"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    /* width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'  */
  },
  content: {
    flex: 1,
    /* width: '100%',
    alignItems: 'center',
    justifyContent: 'center', */
  }, 
  emoji: {
    fontSize: 78,
    marginBottom: 32
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    lineHeight: 32
  },
  subTitle:{
    color: colors.body_light,
    textAlign: 'center',
    fontFamily: fonts.text,
    lineHeight: 18,
    paddingHorizontal: 80,
    fontSize: 17
  },  
});
