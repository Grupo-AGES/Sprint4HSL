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

export default function RecoveryPassword(props: any) {
  function newLogin(){
    props.navigation.navigate('login')
  }

  function handleNoLogin(){
    props.navigation.navigate('register')
  }

  function handleCode(){
    props.navigation.navigate('codeView')
  }

  return (
    <Background>
      <ScrollView>
        <Header logged={false}/>
        <View style={styles.formContent}>
            <Text style={styles.formLabel1}>Matrícula</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua matrícula"
              keyboardType="numeric"
            />
            <TouchableOpacity 
          style={styles.button}
          >
            <Text style={styles.buttonText} onPress={handleCode}>Enviar</Text>
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
