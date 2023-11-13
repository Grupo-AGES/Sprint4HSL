import React, { useState} from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Header } from "../../components/Header";
import Background from "@components/Background";
import styles from "../styles";
import { login } from '../../../services/integracao'

export function Login(props: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [logged, setLogged] = useState(false);

  let data = {
    matricula: matricula,
    password: password
  }
    
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function irCadastro() {
    props.navigation.navigate("register");
  }

  function forgotPassword() {
    props.navigation.navigate("recoveryPassword");
  }

  function forgotMatricula() {
    props.navigation.navigate("recoveryMatricula");
  }

 async function handleLogin(data: any) {
      try {
        const response = await login(data);
        console.log("respostaLogin", response)
        setLogged(true);
        setMatricula('')
        setPassword('')
        setTimeout(() => {
          props.navigation.replace('home');
        }, 2000)
      } catch (error) {
        console.error("error login", error)
        setTimeout(() => {
          props.navigation.replace('home');
        }, 2000)
      }
    }

  return (
    <Background>
      <ScrollView>
        <Header logged={logged} />
        <View style={styles.formContent}>
          <Text style={styles.formLabel1}>Matrícula</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matrícula"
            keyboardType="numeric"
            value={matricula}
            onChangeText={(text) => setMatricula(text)}
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecoverySenha}>
            <Text style={styles.recoveryText} onPress={forgotPassword}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecoveryMatricula}>
            <Text style={styles.recoveryText} onPress={forgotMatricula}>
              Esqueci a matrícula
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText} onPress={irCadastro}>
              Não possui login? Cadastre-se aqui!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}
