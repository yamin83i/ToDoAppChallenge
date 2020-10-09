import React from "react"
import {View, Text} from "react-native"
import { exp } from "react-native/Libraries/Animated/src/Easing"

const TextCust= (props)=>{
    return(
    <Text style={{fontSize:30}}>{props.title}</Text>
    )
}

export default TextCust