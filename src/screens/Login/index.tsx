import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";

import styles from './styles';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <View style={styles.imageHeader}>
            <Image source={require("../../../assets/logoBlue.png")} />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>Matrícula</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matrícula"
            keyboardType="numeric"
            value={matricula}
          />
          <Text style={styles.formLabel}>Senha</Text>
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
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecovery}>
            <Text style={styles.recoveryText}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.buttonRegister}
          >
            <Text style={styles.registerText}>Não possui login? Cadastre-se aqui!</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
  );
}
