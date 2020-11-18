import React,{useEffect, useRef} from 'react';
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native';
import Logo from "../components/Logo"
import Animated, { useCode, cond, eq, set, interpolate, SpringUtils ,call} from 'react-native-reanimated';
import { withTimingTransition, onGestureEvent, withSpringTransition } from 'react-native-redash/lib/module/v1';
import {SCREEN_HEIGHT, LOGIN_VIEW_HEIGHT} from "../Constants";
import { TextInput, TapGestureHandler, State } from 'react-native-gesture-handler';
import Overlay from '../components/Overlay';
import HeaderBackArrow from '../components/HeaderBackArrow';
import AnimatedPlaceHolder from '../components/AnimatedPlaceHolder';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';



export default function Login({navigation}) {

  const scale = useRef(new Animated.Value(0));
  const inputRef = useRef(null);
  const scaleAnimation = withTimingTransition(scale.current)
  

  
  
  const focusTextInput = () => {
    //focus Text input
    inputRef.current.focus()
  }
  const keyboardDismiss = () => {
    Keyboard.dismiss();
  }
  const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0,1],
    outputRange: [LOGIN_VIEW_HEIGHT, 0]
  })

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED))
  const gestureHandler = onGestureEvent({state: gestureState.current})

  const arrowGestureState = useRef(new Animated.Value(State.UNDETERMINED))
  const arrowGestureHandler = onGestureEvent({state: arrowGestureState.current})

  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20)
  })

  const outerLoginY = interpolate(isOpenAnimation, {
    inputRange: [0,1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT / 2]
  })

  const headingOpacity = interpolate(isOpenAnimation, {
    inputRange : [0,1],
    outputRange : [1,0],
  })

  useCode(()=> 
    cond(eq(arrowGestureState.current, State.END), [
        set(gestureState.current , State.UNDETERMINED),
        set(isOpen.current, 0),
        call([], keyboardDismiss)
    ]),
    [arrowGestureState.current],
  );

  useCode(()=> 
    cond(
      eq(gestureState.current, State.END), 
      [
        cond(eq(isOpen.current, 0), [
          set(isOpen.current, 1),                    
          call([], focusTextInput),
        ]),
    ],
    [gestureState.current],
    ),
  );
  useCode(()=> cond(eq(scale.current, 0), set(scale.current, 1)), [])


  return (
    <View style={styles.container}>      
      <View style={{...styles.logoContainer}}>
        <Logo scale={scaleAnimation}/>
      </View>
      <HeaderBackArrow isOpenAnimation={isOpenAnimation} gestureHandler={{...arrowGestureHandler}} />
      <Animated.View style={{
          backgroundColor:"white",
          ...StyleSheet.absoluteFill, 
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          transform:[{translateY: outerLoginY}]         
        }}>
        
        <Overlay isOpenAnimation={isOpenAnimation}/>
        <Animated.View>
          <Animated.View
            style={{
              height:LOGIN_VIEW_HEIGHT,        
              backgroundColor:"white",
              transform:[{translateY: innerLoginY}],
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
            }}
          >            
            <Animated.View style={{...styles.heading , opacity: headingOpacity}}>
              <Text style={{fontSize: 24, fontFamily:'Poppins-ExtraLight'}}>
                  Prendre votre consultation
              </Text>
            </Animated.View>

            <TapGestureHandler {...gestureHandler} >
              <Animated.View>
                <Animated.View pointerEvents={"none"} style={{flexDirection:"row", margin:25,alignItems:'center'}}>
                  <Image 
                    source={require("../assets/ocp.png")}
                    style={{width:34,height:34, resizeMode:"contain"}}
                  />
                  <AnimatedPlaceHolder  isOpenAnimation={isOpenAnimation}/>
                  <Animated.View style={{flexDirection:"row",alignItems:'center'}}>
                    <Text style={{paddingHorizontal:10,fontSize:20,fontFamily:"Poppins-Regular"}}>Matricule : </Text>
                    <TextInput style={{fontFamily:'Poppins-ExtraLight', width:200,alignItems:'center',justifyContent:'center'}} ref={inputRef} placeholder="EX: AFA668"/>
                  </Animated.View>
                </Animated.View>
              </Animated.View> 
  
            </TapGestureHandler>            

          </Animated.View>
          <Animated.View style={{flexDirection:"row",alignItems:'center',justifyContent:'center', opacity:isOpenAnimation}}>
            <Button onPress={()=>navigation.navigate('DrawerNav')} style={{width:120,alignItems:'center',justifyContent:'center',backgroundColor:"#2289d6", borderRadius:30}}>              
              <Text style={{fontFamily:'Poppins-Regular', color:'#FFF'}}>Continuer</Text>
              <Icon name="arrow-right" color='#FFF' size={15} />
            </Button>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2289d6',
  },
  logoContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  heading:{
    alignItems:'flex-start',
    marginHorizontal:25,
    marginTop:50,
  }
});
