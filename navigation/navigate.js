import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Modulos
import home from '../components/home';
import Login from '../components/login';
import Registro from '../components/registro';

const Stack = createNativeStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerTitleAlign: "center"
        }}
      >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;