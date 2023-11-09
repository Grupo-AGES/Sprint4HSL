import {
  View,
  Text,
  ScrollView
} from "react-native"
import React from "react"
import styles from '../styles'
import { Header } from '../../components/Header'
import RNPickerSelect from 'react-native-picker-select'
import { AniversariantesDia } from "@components/AniversariantesDia"
import { AniversariantesMes } from "@components/AniversariantesMes"

export default function Birthday() {

  return (
    <View style={styles.containerLogged}>
      <ScrollView>
        <Header logged={true} />
        <View style={styles.formContent}>
          <Text style={styles.textBDay}>Lista de aniversiariantes</Text>
          <RNPickerSelect placeholder={{
            label: "Selecione o mês"
          }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Janeiro', value: 'janeiro' },
              { label: 'Fevereiro', value: 'fevereiro' },
              { label: 'Março', value: 'marco' },
              { label: 'Abril', value: 'abril' },
              { label: 'Maio', value: 'maio' },
              { label: 'Junho', value: 'junho' },
              { label: 'Julho', value: 'julho' },
              { label: 'Agosto', value: 'agosto' },
              { label: 'Setembro', value: 'setembro' },
              { label: 'Outubro', value: 'outubro' },
              { label: 'Novembro', value: 'novembro' },
              { label: 'Dezembro', value: 'dezembro' },
            ]}
          />
          <Text style={styles.textBDay}>Hoje</Text>
          <AniversariantesDia />
          <Text style={styles.textBDay}>Outros</Text>
          <AniversariantesMes/>
        </View>
      </ScrollView>
    </View>
  )
}
