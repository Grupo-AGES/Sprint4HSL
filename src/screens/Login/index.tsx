import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { StyleSheet, Platform, StatusBar } from "react-native";

import { Header } from '../../components/Header'

import styles from '../styles';

export function Login(props: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [logged, setLogged] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleNoLogin(){
    props.navigation.navigate('register')
  }

  function forgotPassword(){
    props.navigation.navigate('recoveryPassword')
  }

  function forgotMatricula(){
    props.navigation.navigate('recoveryMatricula')
  }

  function handleLogin(){
    setLogged(true)
    console.log("logou")
    props.navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
        <ScrollView>
          <Header logged={logged}/>
        <View style={styles.formContent}>
          <Text style={styles.formLabel1}>Matrícula</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matrícula"
            keyboardType="numeric"
            value={matricula}
          />
          <Text style={styles.formLabel2}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                showPassword
                  ? require("../../../assets/olho.png")
                  : require("../../../assets/olho-cruzado.png")
              }
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          >
            <Text style={styles.buttonText} onPress={handleLogin}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecoverySenha}>
            <Text style={styles.recoveryText} onPress={forgotPassword}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecoveryMatricula}>
            <Text style={styles.recoveryText} onPress={forgotMatricula}>Esqueci a matrícula</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.buttonRegister}
          >
            <Text style={styles.registerText} onPress={handleNoLogin}>Não possui login? Cadastre-se aqui!</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
  );
}
