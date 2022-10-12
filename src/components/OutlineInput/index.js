import { View, Text } from 'react-native'
import React from 'react'
import { InputOutline, InputStandard } from 'react-native-input-outline';

const OutlineInput = ({placeholder, error, assistiveText, characterCount, keyboardType, secureTextEntry, value, onChangeText}) => {
    return (
        <InputOutline
            placeholder={placeholder}
            error={error}
            assistiveText={assistiveText}
            characterCount={characterCount}
            fontSize={18}
            errorFontSize={12}
            assistiveTextFontSize={12}
            characterCountFontSize={12}
            paddingVertical={12}
            paddingHorizontal={16}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

export default OutlineInput