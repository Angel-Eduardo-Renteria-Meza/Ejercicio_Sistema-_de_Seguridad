import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
// Importar la librería de socket.io-client
import io from 'socket.io-client';


export default function Home({ navigation }){

    function getCookieObject() {
        const cookieString = document.cookie;
        const cookieArray = cookieString.split("; ");
        const cookieObject = {};
        for (let i = 0; i < cookieArray.length; i++) {
          const cookie = cookieArray[i].split("=");
          const cookieName = cookie[0];
          const cookieValue = cookie[1];
          cookieObject[cookieName] = cookieValue;
        }
        return cookieObject;
      }
      
      const tokenObject = getCookieObject();
      const token = tokenObject.miCookie;
      
axios.post('http://localhost:5000/api/users/token',{token})
    .then(data => {
        const place = data.data.place
        
        switch (true) {
        case place === 'app':
            navigation.navigate('Datos')
            console.log("es una app");
            break;
        case place === 'login':
            
            break;
        default:
            break;
      }}
      
    )
    .catch(err => console.log(err))

    const socket = io('http://localhost:5000');

    socket.on('connect', () => {
        
      });

      socket.on('disconnect', () => {
        console.log('Desconectado del servidor');
      });
 
      socket.on('update', (data) => {
        console.log(data);
        if(data.RFID === 'D08E323B'){
            navigation.navigate('Login')
        }
      });

      function handleSubmit () {
        navigation.navigate('Login')
      }
    // const initVali ={
    //     '_id': '',
    //     'RFID': '',
    //     'estatus': ''
    // }
    // localStorage.setItem('validaciones', JSON.stringify(initVali));
    // const keyJSON = localStorage.getItem('validaciones');
    // const key = JSON.parse(keyJSON);
    
    
    //  if (key._id === ''){ setInterval(() => {
    //     axios.get('https://rfid-back2.vercel.app/api/ultimo')
    //      .then(data => {
    //         const validaciones = {
    //                 'RFID': data.data[0].RFID,
    //                 'estatus': data.data[0].estatus
    //         }
    //         localStorage.setItem('validaciones', JSON.stringify(validaciones));

    //         const miObjetoJSON = localStorage.getItem('validaciones');

    //         const miObjeto = JSON.parse(miObjetoJSON);

    //         console.log(miObjeto);
    //          if (miObjeto.RFID === 'D08E323B'){

                 
    //              localStorage.setItem('validaciones', JSON.stringify(initVali));
    //                 // localStorage.clear();

    //               navigation.navigate('Login')
               
                
                
    //          }
    //      })
    //      .catch(err => {console.log(err);})
    // }, 10000)
    
    // function res(){
    //     axios.get('https://rfid-back2.vercel.app/api/ultimo')
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => {console.log(err);})
    // }


    return(

        <View style={styles.View}>
            <Text style={styles.Text}>
                Porfavor utiliza tu tarjeta o llavero para Validarte.
            </Text>
             {/* <TouchableOpacity
                onPress={handleSubmit}
                style={styles.TouchableOpacity}
            >
            <Text style={styles.Text2}>ir a login</Text>
               
            </TouchableOpacity>   */}
            {/* <TouchableOpacity
                onPress={res}
                style={styles.TouchableOpacity}
            >
                get axios
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Text:{
        fontSize: 18
    },
    Text2:{
        fontSize: 18,
        color: 'white'
    },
    TouchableOpacity: {
        backgroundColor: 'green',
        borderRadius: 15,
        color: 'white',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:10,
        marginTop:15
    }
})