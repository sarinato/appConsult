import React ,{useState, useEffect} from 'react';
import { View, StyleSheet, Dimensions,Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import Appointment from "../components/Appointment/Appointment";
import EmptyHistory from "../components/Lottie/EmptyHistory";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'native-base';
import Map from "../components/Lottie/Map"
import Doc from "../components/Lottie/Doc"
import Calendrier from "../components/Lottie/Calendrier"
import Doctor from "../components/Doctors/Doctor"
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Chat from "../components/Chat/Chat"


const FirstRoute = () => (
  <Appointment />
);
 
const SecondRoute = () => (
  <View style={[styles.scene]} >    
    <EmptyHistory />
  </View>
);

const VilleItem = ({city, bgColor, onPress}) => {
  return(
      <TouchableOpacity
          style={{flex:1, alignItems:'center', justifyContent: 'center'}}
          onPress={()=>onPress()} 
      >
          <View style={[styles.shadow,{width:170,height:90}]}>
            <LinearGradient
                  style={{flex:1, alignItems:'center', justifyContent: 'center',borderRadius:20}}
                  colors={bgColor}
                  start={{x:0, y:0}}
                  end={{x:0, y:1}}
              >
              <Text style={{fontFamily:'Poppins-Regular', fontSize:15, color:'#FFF'}}>{city}</Text>
              <Icon size={25} color={'#FFF'} name="map-pin"/>
            </LinearGradient>
          </View>
      </TouchableOpacity>
  )
}

const OptionItem = ({page, bgColor, onPress, imageSize, containerSize, source}) => {
  return(
      <TouchableOpacity
          style={{flex:1, alignItems:'center', justifyContent: 'center'}}
          onPress={()=>onPress()} 
      >
          <View style={[styles.shadow,{width:containerSize.w, height:containerSize.h}]}>
              <LinearGradient
                  style={{flex:1, alignItems:'center', justifyContent: 'center',borderRadius:20}}
                  colors={bgColor}
                  start={{x:0, y:0}}
                  end={{x:0, y:1}}
              >
              {page === 0 ? 
                      <Image 
                      tintColor='#FFF'                
                      source={source}
                      resizeMode='contain'
                      style={{
                        width:imageSize.w,
                        height:imageSize.h
                      }}
                    />:
                    <Icon size={30} color={'#FFF'} name="home"/>
              }
    
              </LinearGradient>
          </View>
      </TouchableOpacity>
  )
}

const PageZero = ({setPage}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Prochaine' },
    { key: 'second', title: 'Historique' },
  ]); 
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <>
      <View style={{flex:1, width:'100%', marginTop:10,alignItems:'center'}}>
        <Image 
          
          source={require('../assets/Banner2.png')}                    
          style={[{width:"90%",height:"100%",borderRadius:30}]}
        />
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
          <OptionItem
            page={0}
            bgColor={['#46aeff', '#5884ff']}     
            onPress={()=>setPage(1)}     
            imageSize={{w:50,h:50}}
            containerSize={{w:100,h:100}}
            source={require("../assets/appointment.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex:3}}>

      <TabView        
        renderTabBar={props => <TabBar style={{backgroundColor:'#2289d6',borderTopLeftRadius:20,borderTopRightRadius:20}} pressOpacity={0.3} labelStyle={{fontFamily:"Poppins-Regular"}} bounces={true} indicatorStyle={{backgroundColor:'#FFF'}} {...props} />}
        // sceneContainerStyle={{height:'90%'}}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        
      />
      
      </View>
      
    </>

 
  );
}

const PageOne = ({setPage}) => {
  return(
    <View style={{flex:1, alignItems:'center',justifyContent: 'center', width:"100%"}}>
      <View style={{flex:1, width:"100%",alignItems:'center', justifyContent:'center'}}>        
        <Map />
        <Text style={{fontFamily:'Poppins-ExtraLight', fontSize:20, paddingTop:30}}>Choisir votre ville </Text>
      </View>
      <View style={{flex:3,width:"90%",alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1,width:'100%',flexDirection:'row', justifyContent:"space-around"}}>
          <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Youssoufia'}
          />
          <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Khouribga'}
          />
        </View>
        <View style={{flex:1,width:'100%',flexDirection:'row', justifyContent:"space-around"}}>
        <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Safi'}
          />
          <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Casablanca'}
          />
        </View>
        <View style={{flex:1,width:'100%',flexDirection:'row', justifyContent:"space-around"}}>
        <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Laayoun'}
          />
          <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Jorf sfer'}
          />
        </View>
        <View style={{flex:1,width:'100%',flexDirection:'row', justifyContent:"space-around"}}>
        <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Benguerir'}
          />
          <VilleItem
            page={1}
            bgColor={['#3b9dff', '#89c4ff']}     
            onPress={()=>setPage(2)}     
            city={'Youssoufia'}
          />
        </View>
      </View>
      <View style={{flex:0.5}}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
            <OptionItem
                page={1}           
                onPress={()=>setPage(0)}
                bgColor={['#46aeff', '#5884ff']}   
                imageSize={{w:30,h:30}}
                containerSize={{w:60,h:60}}
                source={require("../assets/home.png")}  
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const PageTwo = ({setPage}) => {
  return(
    <View style={{flex:1, alignItems:'center',justifyContent: 'center', width:"100%"}}>
      <View style={{flex:1, width:"100%",alignItems:'center', justifyContent:'center'}}>        
        <Doc />
        <Text style={{fontFamily:'Poppins-ExtraLight', fontSize:20, paddingTop:30}}>Choisir un médecin </Text>
  
      </View>
      <View style={{flex:3}}>
        <Doctor onDocPress={()=>setPage(3)} />
      </View>
      <View style={{flex:0.5}}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
            <OptionItem
                page={2}           
                onPress={()=>setPage(0)}
                bgColor={['#46aeff', '#5884ff']}   
                imageSize={{w:30,h:30}}
                containerSize={{w:60,h:60}}
                source={require("../assets/home.png")}  
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const PageThree = ({setPage}) => {
  return(
    <View style={{flex:1, alignItems:'center',justifyContent: 'center', width:"100%"}}>
      <View style={{flex:1, width:"100%",alignItems:'center', justifyContent:'center'}}>        
        <Calendrier />
        <Text style={{fontFamily:'Poppins-ExtraLight', fontSize:20, paddingTop:30}}>Choisir un le temps </Text>
      </View>
      <View style={{flex:3,width:"100%"}}>
        <Agenda style={{width:"100%",alignContent:'center',justifyContent: 'center'}}                   
          futureScrollRange={1}
          pastScrollRange={0}
          onDayPress={(day)=>setPage(4)}
          markedDates={{
            '2020-11-22': {selected: true, marked: true},
            '2020-11-24': {marked: true,selected: true,},
            '2020-11-25': {marked: true,selected: true}
          }}
          theme={{
            textDayFontFamily: 'Poppins-ExtraLight',
            textMonthFontFamily: 'Poppins-ExtraLight',
            textDayHeaderFontFamily: 'Poppins-Regular',
            
          }}          
          style={[{borderRadius:30},styles.shadow]}
          items={{
            '2020-11-22': [{name: 'item 1 - any js object'}],
            // '2020-11-24': [{name: 'item 2 - any js object', height: 80}],
            // '2020-11-25': [],
            // '2020-11-26': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
          }}
          
        />
        
      </View>
      <View style={{flex:0.5}}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
            <OptionItem
                page={3}           
                onPress={()=>setPage(0)}
                bgColor={['#46aeff', '#5884ff']}   
                imageSize={{w:30,h:30}}
                containerSize={{w:60,h:60}}
                source={require("../assets/home.png")}  
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const PageFour = ({setPage}) => {
  return(
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <Chat />
      </View> 
      <View style={{flex:1}}>        
      
      </View>      
    </View>
 
  )
}




 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function Consultation() {
  const [page, setPage] = useState(0)
  return(
    <View style={{flex:1}}>
      {page === 0 && <PageZero setPage={setPage}/>}
      {page === 1 && <PageOne setPage= {setPage}/>}  
      {page === 2 && <PageTwo setPage= {setPage}/>}   
      {page === 3 && <PageThree setPage= {setPage}/>} 
      {page === 4 && <PageFour setPage= {setPage}/>}      
    </View>    
  )
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.41,
    shadowRadius: 4.11,
    
    elevation: 14,
}
});