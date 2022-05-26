import React from 'react'
import * as Animatable from "react-native-animatable"

import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

import Backgound from "../../assets/backgound.png"

export default function SignIn() {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Backgound} style={styles.imageBackground}>

        <Animatable.View 
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
          >
            <Text style={styles.messege}>Bem Vindo(a)</Text>
        </Animatable.View>

        <Animatable.View 
        animation="fadeInUp"
        style={styles.containerForm}
        >
            <Text style={styles.title}>Email:</Text>
            <TextInput style={styles.input}
            placeholder='Digite um E-mail'
            placeholderTextColor="#404460"
            />
            
            <Text style={styles.title}>Senha:</Text>
            <TextInput style={styles.input}
              placeholder='Senha'
              placeholderTextColor="#404460"
            />

            <TouchableOpacity
            style={styles.button}
            onPress={()=>{}}
            >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={()=>{}}
            >
              <Text style={styles.registerText}>Cadastrar-se</Text>
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
    // justifyContent: "center",
    // alignItems: "center"
  },
  containerHeader:{
    marginTop:"14%",
    marginBottom:"8%",
    marginStart:"5%"
  },
  messege:{
    color:"#eb7700",
    fontWeight:"bold",
    fontSize:26
  },
  containerForm:{
    backgroundColor:"#84879a",
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
    shadowOpacity:1
  },
  title:{
    fontSize:30,
    marginTop:28,
  },
  input:{
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:16,
  },
  button:{
    backgroundColor:"#404460",
    width:"100%",
    borderRadius:4,
    paddingVertical:8,
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:"#FFF",
    fontSize:18,
    fontWeight:'bold'
  },
  buttonRegister:{
    alignSelf:"center"
  },
  registerText:{
    color:"#404460",
    fontWeight:"bold",
    marginTop:5,

  }

});