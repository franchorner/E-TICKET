/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {StatusBar} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Home from "./src/componentes/Home";
 import Eventos from './src/componentes/Eventos';
 import Compras from './src/componentes/Compra'
import Contatos from './src/componentes/Contato';
 
 const Stack=createStackNavigator();
 
 const App: () => Node = () => {
  
   return (
      <>
       <StatusBar barStyle='light-content'  />
 
       <NavigationContainer>
           <Stack.Navigator screenOptions={{
                            headerMode:'screen'}}
                            initialRouteName='Home'>
             
             <Stack.Screen name='Home'          
                         options={{headerShown:false}}>
                         {(props) => <Home {...props} username='Sports Fan' cab='xx'/>}
             </Stack.Screen>
 
             <Stack.Screen
                name="Tickets"
                component={Eventos}
                options={{
                 
              
                  headerTitleAlign:'center',               
                  headerTitle: 'Tickets'
                }}
                >
             </Stack.Screen>

             <Stack.Screen
                name="Compras"
                component={Compras}
                options={{
                 
              
                  headerTitleAlign:'center',               
                  headerTitle: 'Compras'
                }}
                >
             </Stack.Screen>
             
             <Stack.Screen
                name="Contatos"
                component={Contatos}
                options={{
                 
              
                  headerTitleAlign:'center',               
                  headerTitle: 'Contatos'
                }}
                >
             </Stack.Screen>
            
           </Stack.Navigator>      
       </NavigationContainer>   
 
 
    
     </>
   );
 };
 
 
 
 export default App;
 
