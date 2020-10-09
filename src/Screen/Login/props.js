import React from "react"
import {View, Text} from "react-native"
import { exp } from "react-native/Libraries/Animated/src/Easing"

const Tekscustom= (props)=>{
    return(
    <Text style={{fontSize:40, textDecorationLine:"underline", color:"#5d4df5"}}>{props.title}</Text>
    )
}

export default Tekscustom