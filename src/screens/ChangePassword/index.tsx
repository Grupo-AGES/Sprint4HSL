import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Header } from '../../components/Header'
import Background from "@components/Background";
import styles from '../styles'

export default function ChangePassword(props: any) {

  function irLogin() {
    props.navigation.navigate('login')
  }

  return (
    <Background>
      <ScrollView>
        <Header logged={true} />
        <View style={styles.formContent}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha atual"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua nova senha"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Repite sua nova senha"
            keyboardType="default"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText} onPress={irLogin}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}
