import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default function Datos(){
    const [mediciones, setDatos] = useState([]);
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
            {mediciones.map((medicion) =>(
                <View key={medicion.id}>
                    <Text>id: {medicion._id}</Text>
                </View>
            ))}
        </View>
        
    
    )
}