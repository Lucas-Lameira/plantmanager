import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.green,  
    width: 231,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16 
  },
  buttonText:{
    color: colors.white,   
  }
})