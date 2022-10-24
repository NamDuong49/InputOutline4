import {View, Text, KeyboardTypeOptions} from 'react-native';
import React from 'react';
import {InputOutline, InputStandard} from 'react-native-input-outline';

interface Props {
  placeholder: string;
  error?: string | undefined;
  assistiveText?: string;
  characterCount?: number;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: Function;
  trailingIcon?: any;
}

export default function OutlineInput(props: Props) {
  return (
    <InputOutline
      placeholder={props.placeholder}
      error={props.error}
      assistiveText={props.assistiveText}
      characterCount={props.characterCount}
      fontSize={18}
      errorFontSize={12}
      assistiveTextFontSize={12}
      characterCountFontSize={12}
      paddingVertical={12}
      paddingHorizontal={16}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={text => props.onChangeText(text)}
      trailingIcon={props.trailingIcon}
    />
  );
}
