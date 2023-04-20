import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Modulos
import Home from '../components/home';
import Login from '../components/login';
import Registro from '../components/registro';
import CountDown from '../components/countDown';
import Datos from '../components/Datos';

const Stack = createNativeStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="Count" component={CountDown}/>
        <Stack.Screen name="Datos" component={Datos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;