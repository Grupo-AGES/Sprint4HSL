import { View, Image, Text } from 'react-native';

import styles from './aniverMesStyle';

export function AniversariantesMes() {
    const aniversariantes = [{
        nome: "Luciano Hulk",
        data: "19/11"
    },
    {
        nome: "Jorge Da Silva",
        data: "27/11"
    }
]

    return (
        <View style={styles.bodyAniverMes}>
            {aniversariantes.map((aniversiariante, index) => (
        <View key={index} style={styles.lista}>
          <Text>{aniversiariante.nome}</Text>
          <Text>{aniversiariante.data}</Text>
        </View>
      ))}
        </View>
    )
}
