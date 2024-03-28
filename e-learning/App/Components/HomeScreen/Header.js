import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { isLoaded } from 'expo-font';
import Colors from '../../Utils/Colors';
import coin from '../../../assets/images/coin.png';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
 
    const {isLoader, isSignedIn, user}=useUser();
    return isLoaded&&(
    <View>
        <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
            <View style={styles.rowStyle}>
                <Image source = {{uri:user?.imageUrl}}
                    style={{width:50,height:50, borderRadius:100}}/>
                <View>
                    <Text style={{color:Colors.WHITE, fontFamily:'outfit'}}>Welcome,</Text>
                    <Text style={styles.mainText}>{user?.firstName}</Text> 
                </View>
            </View>
            <View style={styles.rowStyle}>
                <Image source={coin} style={{width:30, height:30}}/>
                <Text style={styles.mainText}>1000</Text>
            </View>
        </View>
        <View style={styles.searchbar}>
            <TextInput placeholder='search courses' style={{fontFamily:'outfit', fontSize:18}}/>
            <Ionicons name="search" size={25} color={Colors.PRIMARY} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        color:Colors.WHITE, 
        fontSize:20,
        fontFamily:'outfit'
    },
    rowStyle:{
        display:'flex', 
        flexDirection:'row', 
        gap:10, 
        alignItems:'center'
    },
    searchbar:{
        backgroundColor:Colors.WHITE, 
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:99,
        paddingRight:10,
        marginTop:20,
    }
})