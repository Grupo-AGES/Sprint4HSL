import { View, Image, Text } from 'react-native';
import { birthdaysMes } from '../../../services/integracao'
import styles from './aniverMesStyle';
import { useEffect, useState } from 'react';

export function AniversariantesMes() {
    const [aniversariantes, setAniversariantes] = useState([])

    useEffect(()=>{
        async function getAniversariantes(){
            const response = await birthdaysMes()
            setAniversariantes(response.data)
    }
    
    getAniversariantes()
    },[]);
    
    return (
        <View style={styles.bodyAniverMes}>
            {aniversariantes.map((aniversiariante, index) => (
        <View key={index} style={styles.lista}>
          <Text>{aniversiariante.name}</Text>
          <Text>{aniversiariante.nascimento}</Text>
        </View>
      ))}
        </View>
    )
}
