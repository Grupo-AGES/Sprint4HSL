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
import { recoveryPassword } from '../../../services/integracao'

export default function RecoveryPassword(props: any) {
  const [email, setEmail] = useState('')
  
  function newLogin(){
    props.navigation.navigate('login')
  }

  function handleNoLogin(){
    props.navigation.navigate('register')
  }

  async function handleCode(email: string) {
      try {
        const response = await recoveryPassword(email)
        setEmail('')
    props.navigation.navigate('codeView')
      } catch (error) {
        console.error("error recover password", error)
      }
    }

  return (
    <Background>
      <ScrollView>
        <Header logged={false}/>
        <View style={styles.formContent}>
            <Text style={styles.formLabel1}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity 
          style={styles.button} onPress={handleCode}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecoverySenha}>
            <Text style={styles.recoveryText} onPress={newLogin}>Volte para a tela de login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.buttonRegister}
          >
            <Text style={styles.registerText} onPress={handleNoLogin}>Não possui login? Cadastre-se aqui!</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </Background>
  );
}
