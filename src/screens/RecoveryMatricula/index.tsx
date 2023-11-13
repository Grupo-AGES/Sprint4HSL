import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Background from "@components/Background";
import { Header } from '../../components/Header'
import styles from '../styles'
import { recoveryMatricula } from '../../../services/integracao'

export default function RecoveryMatricula(props: any) {
  const [email, setEmail] = useState('')

  function irLogin() {
    props.navigation.navigate('login')
  }

  function irCadastro() {
    props.navigation.navigate('register')
  }

  async function handleRecovery(email: string) {
    try {
      const response = await recoveryMatricula(email)
      setEmail('')
    } catch (error) {
      console.error("error recover matricula", error)
    }
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
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleRecovery}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister2}>
            <Text style={styles.registerText} onPress={irCadastro}>
              Não possui login? Cadastre-se aqui!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBack}>
            <Text style={styles.backText} onPress={irLogin}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}
