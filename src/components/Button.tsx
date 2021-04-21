import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {  
  title: string,
}

const Button = ({title, ...rest}: ButtonProps) => {
  return (    
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.green,  
    width: `100%`,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16 
  },
  buttonText:{
    fontSize: 16,
    color: colors.white,  
    fontFamily: fonts.heading  
  }
})