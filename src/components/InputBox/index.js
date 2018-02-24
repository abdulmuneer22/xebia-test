import React from 'react'
import {View,Text,TextInput} from 'react-native'
import {metrics} from '../../constants'

const InputBox = ({onChange,isPassword,placeHolder}) => {
    return(
        <View
        style={{
            width : metrics.WIDTH * 0.8,
            borderWidth : 1,
            borderColor : 'white',
            paddingHorizontal : 15,
            marginVertical : 10,
            borderRadius : 26
        }}
        >
            <TextInput
            placeholder={placeHolder}
            secureTextEntry={isPassword}
            placeholderTextColor = 'rgba(255,255,255,0.3)'
            underlineColorAndroid='rgba(1,1,1,0)'
            style={{
                width : metrics.WIDTH * 0.8,
                height : 50,
                color : 'white'
            }}
            onChangeText = {(v) => onChange(v)}
            />
        </View>
    )
}

export default InputBox