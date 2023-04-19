import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function home({ navigation }){

    function handleSubmit(){
        navigation.navigate('Login')
    }
    return(

        <View style={styles.View}>
            <Text style={styles.Text}>
                Porfavor utiliza tu tarjeta o llavero para Validarte
            </Text>
            <TouchableOpacity
                onPress={handleSubmit}
            >
                ir a login
            </TouchableOpacity>
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
    }
})