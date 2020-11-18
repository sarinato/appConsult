import React from 'react';
import LottieView from 'lottie-react-native';
import {Text , View} from "react-native"

export default class Calendrier extends React.Component {
  render() {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent: 'center',flexDirection:'column',width:"100%",height:"100%"}}>        
         <LottieView
            style={{
                width: 100,
                height: 120,
                backgroundColor: 'transparent',
                paddingTop:4
            }}

            source={require('../../assets/json/Calendrier.json')}
            colorFilters={[{
            keypath: "button",
            color: "#F00000"
            },{
            keypath: "Sending Loader",
            color: "#F00000"
            }]}
            autoPlay
            loop
        />       
        </View> 
     
    );
  }
}