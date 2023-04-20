import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default function Datos(){
    const [mediciones, setMediciones] = useState([]);

    useEffect(() => {
        const res = axios.get(
            "http://localhost:5000/api/mediciones"
          );
          setMediciones(res.data);
});
    return(
        
            
        
        <View key={medicion._id}>
            {
            mediciones.map((medicion) => {
                return(
            <><Text>_id{medicion._id}</Text><Text>RFID{medicion.RFID}</Text><Text>estatus{medicion.estatus}</Text></>
)
}
)
}
        </View>
        
    
    )
}