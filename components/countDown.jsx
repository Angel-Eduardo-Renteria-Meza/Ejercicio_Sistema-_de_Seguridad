import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CountDown = ({ navigation }) => {
  
  // Define el tiempo de la cuenta atrás en segundos
  const countDownTime = 3 * 60;

  // Define el estado inicial del tiempo restante
  const [timeLeft, setTimeLeft] = useState(countDownTime);

  // Actualiza el tiempo restante cada segundo
  useEffect(() => {
    const countDownInterval = setInterval(() => {
      // Disminuimos el tiempo restante en 1 segundo
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Detenemos el temporizador cuando el tiempo restante es igual o menor a cero
    if (timeLeft <= 0) {
      clearInterval(countDownInterval);
      
    }

    // Limpiamos el temporizador cuando el componente es desmontado
    return () => clearInterval(countDownInterval);
  }, [timeLeft]);

  // Calculamos los minutos y segundos restantes
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Mostramos el tiempo restante en el componente
  return (
    <View style={styles.View}>
        <Text>Tienes 3 minutos para registrarte correctamente.</Text>
      <Text style={styles.Text}>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
    View:{
        marginBottom: 20
    },
    Text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'
    }
})