import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Consultation from "./screens/Consultation";
import Parametres from './screens/Parametres';
import {loadAsync} from "expo-font";
import {AppLoading} from "expo";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import Drawer from 'react-native-drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerBar from "./components/DrawerBar"

const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const closeControlPanel = () => {
    _drawer.close()
  };
  const openControlPanel = () => {
    _drawer.open()
  };


  fetchFonts = () => {
    return (
        loadAsync({
          'Poppins-ExtraLight' : require('./assets/fonts/Poppins-ExtraLight.ttf'),
          'Poppins-Medium' : require('./assets/fonts/Poppins-Medium.ttf'),
          'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
          'Poppins-SemiBold' : require('./assets/fonts/Poppins-SemiBold.ttf')
        })
    );
  } 

  const DrawerNav = ({navigation, route}) => {
    return(
      <Drawer          
        ref={(ref) => _drawer = ref}
        type="overlay"
        content={<DrawerBar />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
        })}
      >
        <TabNav navigation={navigation} route={route} openDrawer={()=>openControlPanel()} />
      </Drawer>
    )
  }
  const TabNav = ({openDrawer,navigation,route,}) => {
    useEffect(()=>{      
      
      navigation.setOptions({
        headerLeft:()=>(
          <TouchableOpacity onPress={()=>openDrawer()} style={{ width:'100%',height:60, flexDirection:'row', alignItems:'center'}}>
            <Image 
              source={require('./assets/procheMale.jpg')}
              resizeMode="contain"
              style={{
                  width: 50,
                  height: 40,
              }}
            />
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',}}>
              <Icon size={15} name='arrow-left'/>
              <Text style={{fontFamily:'Poppins-ExtraLight'}}>
                Voir le profil
              </Text>
            </View>            
          </TouchableOpacity>
        ),
      })
    })

    return(
      <Tabs.Navigator 

        tabBarOptions={{
          activeTintColor: "#FFF",
          inactiveTintColor: "#2289d6",
          activeBackgroundColor : "#2289d6",
          labelStyle:{fontFamily:'Poppins-Regular',fontSize:12}
        }}
        appearence={{
          shadow:true,
          floating:(getFocusedRouteNameFromRoute(route) === 'Home' || getFocusedRouteNameFromRoute(route) === 'Paramètres' || getFocusedRouteNameFromRoute(route) === undefined) ? true : false,
          whenInactiveShow:'both',
          dotSize:'small',
        }}
      > 
        <Tabs.Screen 
          name="Home"
          component={Home} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="home"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
          }}          
        />
        <Tabs.Screen 
          name="Consultation"
          component={Consultation}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="video"
                    size={size ? size : 22}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
          }}  
        />
        <Tabs.Screen 
          name="Paramètres" 
          component={Parametres}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="settings"
                    size={size ? size : 22}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
          }}            
        />    
      </Tabs.Navigator>
    )

  }

  if(!fontsLoaded){
    return(
      <AppLoading 
        startAsync={()=>fetchFonts()}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
  }
  else{
    return (
      <>
      <NavigationContainer style={styles.container}>
      <Stack.Navigator>
{/* 
      <Stack.Screen
          name = "Test"
          component = {Test} 
          options={{
            title: "Test",
            headerShown: false,
          }}         
        />  */}

        <Stack.Screen
          name = "Login"
          component = {Login} 
          options={{
            title: "Login",
            headerShown: false,
          }}         
        />

        <Stack.Screen
          name = "DrawerNav"          
          component = {DrawerNav} 
          options={{
            title: null,               
          }}         
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
  flex:1,
  alignItems:'center'
}
