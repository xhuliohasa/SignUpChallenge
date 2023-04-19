import React from 'react';
import {TextInput, KeyboardType} from 'react-native';
import {styles} from './style';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardType;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  onBlur,
  secureTextEntry = false,
}: InputProps) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    onBlur={onBlur}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    autoCapitalize="none"
    autoComplete="off"
    autoCorrect={false}
    placeholderTextColor="#525252"
    style={styles.textInput}
  />
);

export default CustomInput;
