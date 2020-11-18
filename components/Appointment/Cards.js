import React from "react";
import { Dimensions, Image, StyleSheet,View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
    },
});
// export var Cards;

// var Cards = [1, 2,3,4,5,6]
export default ({ type, index }) => {
    let source;
    switch (type) {
        case 'Cards.Card1':
            source = require("../../assets/images/health3.jpg");
            break;
        case 'Cards.Card2':
            source = require("../../assets/images/health2.jpg");
            break;
        case 'Cards.Card3':
            source = require("../../assets/images/health1.jpg");
            break;
        case 'Cards.Card4':
            source = require("../../assets/images/health4.jpg");
            break;
        case 'Cards.Card5':
            source = require("../../assets/images/health5.jpg");
            break;
        case 'Cards.Card6':
            source = require("../../assets/images/health5.jpg");
            break;
        default:
            throw Error("Invalid card style");
    }
    return (
        <TouchableOpacity key={index} activeOpacity={0.9} style={{borderRadius:40, overflow:"hidden"}} >
            <Image source={source} style={styles.card} />            
        </TouchableOpacity>        
    )
};