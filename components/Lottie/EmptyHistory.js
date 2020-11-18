import React from 'react';
import LottieView from 'lottie-react-native';
import {Text , View} from "react-native"

export default class EmptyHistory extends React.Component {
  render() {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent: 'center',flexDirection:'column',width:"100%",height:"100%"}}>
        <Text style={{fontFamily:'Poppins-ExtraLight'}}>Vous n'avez pas encore fait une consultation</Text>
         <LottieView
            style={{
                width: 190,
                height: 190,
                backgroundColor: 'transparent',
            }}

            source={require('../../assets/json/10298-calendar.json')}
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