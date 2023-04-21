import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";

export default function Datos({navigation}){
    const [mediciones, setDatos] = useState([]);

    const Token = localStorage.getItem("token");

  setInterval(() => {
    fetch('http://localhost:5000/api/users/token', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Token}`
        },
        body: Token
      })
      .then(response => response.json())
      .then(data => {
        // Actualizar el token en el almacenamiento local
        console.log("Token verificada");
      })
      .catch(error => {
        console.error('Error al renovar el token:', error);
        navigation.navigate("Home")
      });
  }, 300000);
    
    
    function logout(){
        localStorage.removeItem("token");
        navigation.navigate("Home")
    }
    
    function irCasa() {
        navigation.navigate("Home")
    }
    
    

    async function obtenerDato(){
        const res = await fetch("http://localhost:5000/api/mediciones");
        const dato = await res.json();

        setDatos(dato);
    }
    useEffect(() => {
        obtenerDato();
    })

    return(
        
        
        <View>
            <TouchableOpacity
                onPress={logout}
            >
                <Text>
                    Log out
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={irCasa}
            >
                <Text>
                    Home
                </Text>
            </TouchableOpacity>
            {mediciones.map((medicion) =>(
                <View key={medicion.id}>
                    <Text>id: {medicion._id}</Text>
                </View>
            ))}
        </View>
        
    
    )
            }