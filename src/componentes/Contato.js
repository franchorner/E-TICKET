import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Contatos= ({navigation,route}) => {
    
    console.log(route)
    
    


    return (
        //é o que vai ser redenrizado

        <View>
          
          <Text style={styles.welcome}> Nome:*</Text>
            
            <TouchableOpacity>
            <Text style={styles.quantButton}></Text> 
            </TouchableOpacity>

          
          <Text style={styles.welcome}> Email:*</Text>
            
            <TouchableOpacity>
            <Text style={styles.quantButton}></Text> 
            </TouchableOpacity>

          <Text style={styles.welcome}> Telefone:*</Text>
            
            <TouchableOpacity>
            <Text style={styles.quantButton}></Text> 
            </TouchableOpacity>

          <Text style={styles.welcome}> Mensagem:</Text>
            
            <TouchableOpacity>
            <Text style={styles.ExtraButton}></Text> 
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
            >
            <Text style={styles.buttontext}>Efetivar Contato</Text>
            </TouchableOpacity>
             
        </View>

    );

    };

    
    const styles = StyleSheet.create({

    welcome: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom:5,
      marginLeft:50,
    },
    quantButton:{
      borderColor: '#000000',
      borderRadius:1,
      borderWidth:1,
      backgroundColor: '#FFFAFA',
      color:'#FFFAFA',
      marginLeft:50,
      marginRight:50,
      textAlign:"left",
      width:300,
      height:25,
      fontSize:14,
    },

    ExtraButton:{
      borderColor: '#000000',
      borderRadius:1,
      borderWidth:1,
      backgroundColor: '#FFFAFA',
      color:'#FFFAFA',
      marginLeft:50,
      marginRight:50,
      textAlign:"left",
      width:300,
      height:300,
      fontSize:14,
      marginBottom:50,
    },

    buttontext:{
      backgroundColor: '#000000',
      color:'#FFFAFA',
      marginLeft:100,
      marginRight:100,
      textAlign:"center",
      width:200,
      height:20,
      fontSize:14,
    },
      });
export default Contatos;