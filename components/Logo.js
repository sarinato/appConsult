import React from 'react'
import { Text, View, StyleSheet,Image} from 'react-native'
import Animated from 'react-native-reanimated';    

const Logo = ({scale}) => {
    return(
        <Animated.View style={{...styles.logo, transform:[{scale: scale}]}}>        
            <Image style={{width:90,height:90, resizeMode:'contain'}} source={require('../assets/PeliaLogo.png')}/>
        </Animated.View>
    )    
}

export default Logo;

const styles = StyleSheet.create({
    logo:{
        backgroundColor:'white',
        height:120,
        width:120,
        padding:10,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:10
    }    
})
