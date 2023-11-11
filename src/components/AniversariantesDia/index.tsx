import {View, Image, Text} from 'react-native';

import styles from './aniverStyle';

export function AniversariantesDia() {
    const aniversariantes = [{
        img: require('../../../assets/perfil.png'),
        nome: "Ana Maria Braga",
        idade: "46 anos"
    },
{
    img: require('../../../assets/perfil.png'),
    nome: "Louro José",
    idade: "27 anos"
}]
    return(
        <View style={styles.bodyAniver}>
            {aniversariantes.map((aniversariante, index) => (
        <View key={index}>
            <img src={aniversariante.img}/>
          <Text>{aniversariante.nome}</Text>
          <Text>{aniversariante.idade}</Text>
        </View>
      ))}
        </View>
    )
}
