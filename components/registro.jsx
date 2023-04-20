import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik, useField } from "formik";
import { registroValidationSchena } from "../Validaciones/RegistroValidation";
import StyleInput from "../Styles/StylesInput";
import axios from "axios";





const Registro = ({ navigation }) => {
    

    const initialValues = {
        email: '',
        nombres: '',
        apellidos: '',
        password: '',
        birthDate: ''

    }
    //estilos etiqueta FormikInputValue
    const FormikInputValue = ({ name, ...props}) => {
        const [field, meta, helpers] = useField(name)

        return(
            <>
            <StyleInput
                // error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            /> 
                {meta.error && <Text style={styles.error}>
                    {meta.error}
                </Text>}
            </>
        )
     }

    return(
        <Formik validationSchema={registroValidationSchena}  initialValues={initialValues} onSubmit={values => {
            axios.post('http://localhost:5000/api/users',{
                nombres: values.nombres,
                apellido: values.apellidos,
                email: values.email,
                password: values.password
            }).then(data => console.log(data))
            .catch(err => console.log(err))
        }}>
            {({ handleSubmit }) => {
                return(
        <View style={styles.Container}>
            <Text style={styles.h1}>Registro</Text>
             <View style={styles.containerIn}>
             <Text
                 style={styles.p}
             >
                 Nombres
             </Text>
             <FormikInputValue
                 name = 'nombres'
                 
                 placeholder='Ingresa tu nombre'
                 placeholderTextColor="grey" 
             />
              <Text
                 style={styles.p}
                
             >
                 Apellidos
             </Text>
             <FormikInputValue
                 name = 'apellidos'
                 
                 placeholder='Ingresa tus apellidos'
                 placeholderTextColor="grey" 
             />
             <Text
                 style={styles.p}
             >
                 Correo electrónico
             </Text>
             <FormikInputValue
                 name = 'email'
                 
                 placeholder='Ingresa tu correo'
                 placeholderTextColor="grey" 
             />
              
              <Text
                 style={styles.p}
             >
                 Contraseña
             </Text>
             <FormikInputValue
                 name = 'password'
                 
                 placeholder='Ingresa tu contraseña'
                 placeholderTextColor="grey" 
                 secureTextEntry={true}
             />
              
             </View>
             
            
                <TouchableOpacity
                 style={styles.Btn}
                 onPress={handleSubmit}
             >
                 <Text style={styles.Btntxt}>Registrarse</Text>
             </TouchableOpacity>
             
             <View style={styles.checkboxContainer}>
                 <Text>Ya tienes una cuenta? </Text>
                 <TouchableOpacity
                    onPress={ () => {
                        navigation.navigate('Login')
                    } }
                 >
                     <Text style={styles.ini}>Iniciar sesión</Text>
                 </TouchableOpacity>
             </View>
             </View>
                )
            }}
        </Formik>
        
    );
}

export default Registro

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
       
    },
    Ipt:{
        padding: 10,
        width: '100%',
        paddingStart: 0,
        
    },
    containerIn:{
        width: '80%',
        
    },
    p:{
        color: 'green',
        alignSelf: 'baseline',
        marginTop: 25,
        marginBottom: 5,
        fontWeight: 700
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 10
    },
    p2: {
        marginLeft: 5
    },
    Btn:{
        width: '80%',
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        margin: 5
        
    },
    Btntxt:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        

    },
    ter:{
        color: 'green',
        paddingStart: 0
    },
    terbtn:{
        alignSelf: 'center'
    },
    ini:{
        color: 'green',
        fontWeight: 700
    },
    error:{
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
        marginTop: 0
    }
})