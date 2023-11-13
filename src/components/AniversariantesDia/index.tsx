import {View, Image, Text} from 'react-native';
import styles from './aniverStyle';
import { useEffect, useState } from 'react';
import { birthdays } from '../../../services/integracao';

export function AniversariantesDia() {
    const [aniversariantes, setAniversariantes] = useState([]);
    const img = require('../../../assets/perfil.png')
    const hoje = new Date();
    const ano = hoje.getFullYear();
        let i =0
        const nascimento = ''
    //     for(i=0, i<aniversariantes.length, i++){
    // const nascimento = aniversariantes[i].nascimento
    //     }
    const partes = nascimento.split("/");
    const anoNascimento: string = partes[2];
    const anoNumber = parseInt(anoNascimento)
    let idade = 0

    useEffect(() => {
        async function getAniversariantes(){
            const response = await birthdays()
            setAniversariantes(response.data)
    }
    
    getAniversariantes()

        calculaIdade(ano, anoNumber)
        
    }, []);


    function calculaIdade(ano: number, anoNumber: number) {
        const resultado = ano - anoNumber
        idade += resultado
    }

    
    return(
        <View style={styles.bodyAniver}>
            {aniversariantes.map((aniversariante, index) => (
        <View key={index}>
            <img src={img}/>
          <Text>{aniversariante.nome}</Text>
          <Text>{calculaIdade} anos</Text>
        </View>
      ))}
        </View>
    )
}
