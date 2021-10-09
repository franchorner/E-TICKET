import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Evento= ({navigation,route}) => {
    
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

            
            <TouchableOpacity
                onPress={()=>navigation.navigate('Compras')}
            >
            <Text style={styles.buttontext}>Comprar</Text>
            </TouchableOpacity>

            <Image
             style={styles.imageInfo}   
              source={{
               uri: 'https://cdn.rockinrio.com/wp-content/uploads/2021/07/microsoftteams-image-67.png',
             }}
            />

            <Text
              style={styles.welcome}
            >Rock in Rio</Text>

            <Text
              style={styles.information}
             >Venha ver um dos maiores shows de rock!</Text> 

            <Text
              style={styles.welcome}
             >Preço:150,00</Text> 

            
            <TouchableOpacity>
            <Text style={styles.buttontext}>Comprar</Text>
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

      buttontext:{
        backgroundColor: '#000000',
        color:'#FFFAFA',
        marginLeft:150,
        marginRight:150,
        textAlign:"center",
        width:100,
        height:20,
        fontSize:14,
      

    },
    });
    
export default Evento;