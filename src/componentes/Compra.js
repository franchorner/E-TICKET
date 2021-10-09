import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Compra= ({navigation,route}) => {
    
    console.log(route)
    
    


    return (
        //é o que vai ser redenrizado

        <View>
              <Image
             style={styles.imageInfo}   
              source={{
               uri: 'https://static.coalize.com.br/assets/base/1bb/91f/73e/pauta-de-reuniao-produtiva.jpg',
             }}
            />

            <Text
              style={styles.welcome}
            >Curso sobre Design Thinking</Text>

            <Text
              style={styles.information}
             >Aprenda os principais conceitos sobre Design Thinking</Text> 

            <Text
              style={styles.welcome}
             >Preço:60,00</Text> 

            <Text style={styles.information}> Quantidade</Text>
            
            <TouchableOpacity>
            <Text style={styles.quantButton}></Text> 
            </TouchableOpacity>

            
            <Text
              style={styles.welcome}
             >Total:XXXX</Text> 

            <TouchableOpacity
                onPress={()=>navigation.navigate('Tickets')}>
            <Text style={styles.buttontext}>Efetivar compra</Text>
            </TouchableOpacity>

        </View>

    );

    };

    const styles = StyleSheet.create({
      container: {
        paddingTop: 50,
      },
      imageInfo: {
        width: 400,
        height: 150,
        marginLeft: 5,
        marginTop:20,
        
      }, 
      
      welcome: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:10,
      },

      information:{
        fontSize:18,
        textAlign:"center",
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
      },

      quantButton:{
        borderColor: '#000000',
        borderRadius:1,
        borderWidth:1,
        backgroundColor: '#FFFAFA',
        color:'#FFFAFA',
        marginLeft:156,
        marginRight:156,
        textAlign:"left",
        width:100,
        height:20,
        fontSize:14,
      

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



export default Compra;