import {
  View,
  Alert,
  Pressable,
  Text,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React,{ useState } from "react";
import { response } from "express";

import { Header } from '../../components/Header'
import styles from '../styles'

export default function Register(props: any) {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [mensagemModal, setMensagemModal] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDateChange = (text: String) => {
    const cleanedText = text.replace(/\D/g, '');

    if (cleanedText.length <= 2) {
      setDate(cleanedText);
    } else if (cleanedText.length <= 4) {
      setDate(cleanedText.substring(0, 2) + '/' + cleanedText.substring(2));
    } else {
      setDate(
        cleanedText.substring(0, 2) +
          '/' +
          cleanedText.substring(2, 4) +
          '/' +
          cleanedText.substring(4, 8)
      );
    }
  };

  // const handleRegister = async() => {
  //   try {
  //     const response = await apiRegister.post('/register', {
  //       username,
  //       email,
  //       date,
  //       password
  //     });

  //     setMensagemModal('Cadastro realizado com sucesso! Enviamos um e-mail com sua matricula'); 
  //     console.log(response)
  //     toggleModal();
  //   } catch (error) {
  //     setMensagemModal('Erro no cadastro, tente novamente mais tarde');
  //     console.error(response)
  //     toggleModal();
  //   }
  // };

  const toggleModal = () => {
    setModalVisivel(!modalVisivel);
  };

  const samePasswordValue = () => {
    if(password==passwordConfirmation && password.length>8 && password.includes('!'||'@'||'#'||'%'||'&'||'*')){
      // handleRegister();
      handleLogin();
    }else if(password!=passwordConfirmation){
      setMensagemModal('As senhas são diferentes, por favor insira a mesma senha');
      toggleModal();
    }else if(password.length<8){
      setMensagemModal('A senha é muito curta, por favor insira mais caracteres');
      toggleModal();
    }else if(password.includes('!'||'@'||'#'||'%'||'&'||'*')==false){
      setMensagemModal('A senha precisa conter pelo menos um caractere especial(exemplo: !)');
      toggleModal();
    }
  }

  function newLogin(){
    props.navigation.navigate('login')
  }

  function handleLogin(){
    props.navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header logged={false}/>
      <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisivel(!modalVisivel);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{mensagemModal}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisivel(!modalVisivel)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel3}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            keyboardType="default"
            value={username}
            onChangeText={setName}
          />
          <Text style={styles.formLabel3}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.formLabel3}>Data de nascimento</Text>
          <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              keyboardType="numeric"
              value={date}
              onChangeText={handleDateChange}
          />
          <Image
            source={require("../../../assets/calendario.png")}
            style={styles.image}
          />
          <Text style={styles.formLabel3}>Insira sua senha</Text>
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
          <Text style={styles.formLabel3}>Repita sua senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            value={passwordConfirmation}
            onChangeText={(text) => setPasswordConfirmation(text)}
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={samePasswordValue}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText} onPress={newLogin}>Voltar para o login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
