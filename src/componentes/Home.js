import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Home= (props) => {
    const navigation=useNavigation();
    console.log(props)
    
    
    const [numero,setNumero] = useState(null);


    return (
        //é o que vai ser redenrizado

        <View>
            <Image    
              style={styles.tinyLogo}
              source={{
               uri: 'https://alphaconvites.com.br/wp-content/uploads/2020/12/festa-antes-formatura-2048x1367.jpg',
             }}
            />

            <Text
            style={styles.welcome}
            > Welcome to E-ticket!</Text>

            <Image    
              style={styles.secondImage}
              source={{
               uri: 'https://emc.acidadeon.com/dbimagens/publico_show_790x444_04082021140059.jpg',
             }}
            />

            <Text
              style={styles.information}
            >Você está preparado para participar dos melhores eventos? Você está interessado em esportes, shows, seminários? Acesse nosso app para adquirir um evento da sua escolha.</Text>


            <TouchableOpacity
                onPress={()=>navigation.navigate('Tickets')}>
            <Text style={styles.buttontext}>Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>navigation.navigate('Contatos')}>
            <Text style={styles.buttontext}>Contatos</Text>

            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.buttontext}>News</Text>
            </TouchableOpacity>

        </View>

    );

    };

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 200,
          height: 100,
          marginLeft: 100,
          marginRight: 100,
          marginTop:20,
          
        },

        welcome: {
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
        },

        secondImage:{
          width:300,
          height:150,
          marginTop:20,
          marginLeft:50,
          marginRight:50,
        },

        information:{
          fontSize:18,
          textAlign:"center",
          marginTop:20,
          marginLeft:20,
          marginRight:20,
          marginBottom:50,
        },

          buttontext:{
            backgroundColor: '#000000',
            color:'#FFFAFA',
            width:200,
            height:38,
            fontSize:32,
            textAlign: "center",
            marginLeft:100,
            marginRight:100,
            marginBottom:10,
        },
      });
export default Home;