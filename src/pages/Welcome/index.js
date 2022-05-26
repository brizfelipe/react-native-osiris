import React from 'react'

import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native'

import { 
  View,
  Text,
  SafeAreaView, 
  StatusBar, 
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

import Logo from "../../assets/logo.png"
import Backgound from "../../assets/backgound.png"

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Backgound} style={styles.imageBackground}>

        {/* Logo */}
        <View style={styles.containerLogo}>
            <Animatable.Image animation="flipInX" source={Logo} style={styles.logo}/>
        </View>
          
          {/* Text welcome */}
          <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Monitore e organize seus gastos de qualquer lugar.</Text>
            <Text style={styles.text}>Faca seu login para começar</Text>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('SignIn')}
              style={styles.button}
              >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </Animatable.View>

      </ImageBackground> 

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"row"
    },
    imageBackground: {
      width:"100%",
      height:"100%",
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    },
    logo:{
      width:"100%",
      resizeMode:"contain",
    },
    containerLogo:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:"row"
    },
    containerForm:{
      flex:1,
      backgroundColor:"#fff",
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:'5%',
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      marginTop:28,
      marginBottom:12,
      color:"#3f435f"
    },
    text:{
      color:"#a1a1a1",
      fontWeight:'bold'
    },
    button:{
      position:"absolute",
      backgroundColor:"#3f435f",
      borderRadius:50,
      paddingVertical:8,
      width:'60%',
      alignSelf:'center',
      bottom:'15%',
      alignItems:"center",
      justifyContent:"center"
    },
    buttonText:{
      fontSize:18,
      color:"#fff",
      fontWeight:'bold'
    },
    
})