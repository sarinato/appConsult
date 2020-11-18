import React from 'react';
import LottieView from 'lottie-react-native';
import {Text , View} from "react-native"

export default class EmptyHistory extends React.Component {
  render() {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent: 'center',flexDirection:'column',width:"100%",height:"100%"}}>        
         <LottieView
            style={{
                width: 100,
                height: 100,
                backgroundColor: 'transparent',
                paddingTop:4
            }}

            source={require('../../assets/json/Doc.json')}
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