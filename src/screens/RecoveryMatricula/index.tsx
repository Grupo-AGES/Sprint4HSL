import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Background from "@components/Background";
import { Header } from '../../components/Header'
import styles from '../styles'

export default function RecoveryMatricula(props: any) {

  function newLogin() {
    props.navigation.navigate('login')
  }

  function handleNoLogin() {
    props.navigation.navigate('register')
  }

  return (
    <Background>
      <ScrollView>
        <Header logged={false} />
        <View style={styles.formContent}>
          <Text style={styles.formLabel1}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister2}>
            <Text style={styles.registerText} onPress={handleNoLogin}>
              Não possui login? Cadastre-se aqui!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBack}>
            <Text style={styles.backText} onPress={newLogin}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}
