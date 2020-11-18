import React,
{useEffect, useState} from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import images from "../constants/images"


export default  Home = ({navigation}) => {

    const [articles, setArticles] = useState([
        {
            id:0,
            name: "Health",
            img: images.health1
        },
        {
            id:1,
            name: "Covid",
            img: images.health2
        },
        {
            id:2,
            name: "Doctors",
            img: images.health3
        },
        {
            id:3,
            name: "Pills",
            img: images.health4
        },
        {
            id:4,
            name: "Others",
            img: images.health5
        },
    ])

    function renderDestinations(item, index) {

        if (index == 0) {
            destinationStyle = { marginLeft: 10 }
        }

        return (
            <TouchableOpacity
                style={[{ width:125},destinationStyle]}
                onPress={() => { navigation.navigate("Home") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: 125,
                        height: '60%',
                        borderRadius: 15
                    }}
                />

                <Text style={{fontFamily:'Poppins-ExtraLight',textAlign:'center'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const OptionItem = ({icon, bgColor, label, onPress}) => {
        return(
            <TouchableOpacity
                style={{flex:1, alignItems:'center', justifyContent: 'center'}}
            >
                <View style={[styles.shadow,{width:60, height:60}]}>
                    <LinearGradient
                        style={{flex:1, alignItems:'center', justifyContent: 'center',borderRadius:20}}
                        colors={bgColor}
                        start={{x:0, y:0}}
                        end={{x:0, y:1}}
                    >
                        <Icon 
                            name={icon}
                            size={30}
                            color={'#FFF'}        
                        />
                        

                    </LinearGradient>
                </View>
            <Text style={{fontFamily:'Poppins-ExtraLight'}}>{label}</Text>
            </TouchableOpacity>
        )
    }


    return (
      <View style={styles.container}>
            <View style={{flex:1, width:'90%', marginTop:10}}>
                <Image 
                    source={require('../assets/Banner.png')}                    
                    style={{
                        width:"100%",
                        height:"100%",
                        borderRadius:15
                    }}
                />
            </View>

            {/* {Options} */}
            <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
                <View style={{flexDirection: 'row', width:'90%'}}>
                    <OptionItem
                        icon={'video'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Video"
                        onPress={() => { console.log("Flight") }}
                    />
                    <OptionItem
                        icon={'user'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Chat"
                        onPress={() => { console.log("Train") }}
                    />
                    <OptionItem
                        icon={'book'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Settings"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={'watch'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="History"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>
                {/* <View style={{flexDirection: 'row', width:'90%',paddingTop:20}}>
                    <OptionItem
                        icon={'home'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Docs"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={'home'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Email"
                        onPress={() => { console.log("Eats") }}
                    />
                    <OptionItem
                        icon={'home'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="OCP"
                        onPress={() => { console.log("Adventure") }}
                    />
                    <OptionItem
                        icon={'home'}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Matricule"
                        onPress={() => { console.log("Event") }}
                    />
                </View> */}
                
            </View>
            {/* flexDirection:'column',justifyContent: 'flex-start', */}
            {/* Directions */}
            <View style={{flex:2,borderColor:"#000",borderwWidth:2 }}>                
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={articles}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item, index})=> renderDestinations(item, index)}
                    />
            </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
