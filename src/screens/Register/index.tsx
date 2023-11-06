import {
  View,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React,{ useState } from "react";
import { response } from "express";

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

  const stylesModal = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        bottom: 0,
    },
    header:{
        width: '100%',
        height: 150,
        backgroundColor: '#005CA3',
        justifyContent: 'center',
        marginTop: 0,
    },
    imageHeader: {
        alignContent: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    formContent:{
        width: '100%',
        height: '100%',
        marginTop: 1,
    },
    formLabel:{
        color: '#005CA3',
        fontSize: 20,
        textAlign: 'left',
        paddingLeft: 40,
        marginTop: 23,
    },
    input:{
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#005CA3',
        width: '80%',
        height: 50,
        padding: 10,
    },
    image: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 60,
        marginTop: -35,
      },
      button: {
        alignSelf: 'center',
        backgroundColor: '#005CA3',
        width: 300,
        height: 50,
        borderRadius: 8,
        marginTop: 40,
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      buttonRegister: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center',
      },
      registerText: {
        color: '#005CA3',
        fontSize: 20,
        textAlign: 'center',
      },
      
});

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.imageHeader}>
            <Image source={require("../../../assets/logo.png")} />
          </View>
        </View>
      <View style={stylesModal.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisivel(!modalVisivel);
        }}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text style={stylesModal.modalText}>{mensagemModal}</Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisivel(!modalVisivel)}>
              <Text style={stylesModal.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            keyboardType="default"
            value={username}
            onChangeText={setName}
          />
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.formLabel}>Data de nascimento</Text>
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
          <Text style={styles.formLabel}>Insira sua senha</Text>
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
          <Text style={styles.formLabel}>Repita sua senha</Text>
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