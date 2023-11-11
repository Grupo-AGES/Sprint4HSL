import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native"
import React from "react"
import styles from '../styles'
import { Header } from '../../components/Header'
import RNPickerSelect from 'react-native-picker-select'
import { AniversariantesDia } from "@components/AniversariantesDia"
import { AniversariantesMes } from "@components/AniversariantesMes"

export default function Birthday(props: any) {

  function voltarHome(){
    props.navigation.navigate('home')
}

function irPerfil(){
    props.navigation.navigate('perfil')
}

function irListaAniver(){
    props.navigation.navigate('birthday')
}

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
          <View style={styles.bodyMenu}>
            <TouchableOpacity onPress={voltarHome}>
                <img src={require("../../../assets/casa.png")} style={styles.imgMenu}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={irPerfil}>
                <img src={require("../../../assets/perfil.png")} style={styles.imgMenu}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={irListaAniver} style={styles.imgMenu}>
                <img src={require("../../../assets/balao.png")}/>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}
