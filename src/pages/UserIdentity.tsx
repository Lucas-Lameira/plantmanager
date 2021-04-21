import React, { useState } from 'react';
import {  
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import Button from '../components/Button';

export default function UserIdentity() {
  
  const [isFocused, setIsFocused] = useState<boolean>();
  const [isFilled, setIsFilled] = useState<boolean>();
  const [name, setName] = useState<string>();  

  function handleInputBlur () {
    setIsFocused(true);
    setIsFilled(!!name);
  }

  function handleInputFocus () {
    setIsFocused(true);
  }

  function handleInputChange (value: string) {
    setIsFilled(!!value);
    setName(value); 
  }  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}> {isFilled? '😆' : '😃' }</Text>
              <Text style={styles.text}>Como podemos {'\n'} chamar você</Text>
              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && {borderColor: colors.green}
                ]} 
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <Button title="Confirmar"/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 32
  },
  input:{
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginVertical: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%'
  },
  text: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    lineHeight: 32
  },
});