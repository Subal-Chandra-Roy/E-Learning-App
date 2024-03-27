import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import welcome from './../../assets/images/welcome.png'
import { Dimensions } from 'react-native';
import Colors from '../Utils/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import google from './../../assets/images/google.png'

export default function LoginScreen() {
  return (
    <View style = {styles.container}>
      <Image source={welcome}
      style={styles.welcomeImage}/>
      <View style={styles.box}>
        <Text style={styles.boxText1}>E-LEARNING</Text>
        <Text style={styles.boxText2}>Your ultimate learning Application</Text>
        <TouchableOpacity style={styles.button}>
            <Image source={google} style={{width:40, height:40}}/>
            <Text style={styles.buttonText}>Sign In with google</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center'
    },
    welcomeImage:{
        width:250,
        height:500,
        marginTop:70,
        objectFit:'contain'
    },
    box:{
        height:windowHeight,
        width:windowWidth,
        backgroundColor:Colors.PRIMARY,
        marginTop:-80,
        padding:20
    },
    boxText1:{
        textAlign:'center', 
        fontSize:35, 
        color:Colors.WHITE, 
        fontFamily:'outfit-bold'
    },
    boxText2:{
        textAlign:'center', 
        marginTop:20, 
        fontSize:20, 
        color:Colors.LIGHT_PRIMARY, 
        fontFamily:'outfit'
    },
    button:{
        backgroundColor:Colors.WHITE,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'center',
        padding:10,
        borderRadius:50,
        margin:25,
    },
    buttonText:{
        fontSize:20, 
        fontFamily:'outfit', 
        color:Colors.PRIMARY
    }

})