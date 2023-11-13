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
} from "react-native"
import React, { useEffect, useState } from "react"
import Background from "@components/Background"
import { Header } from '../../components/Header'
import styles from '../styles'
import { createUser } from '../../../services/integracao'

export default function Register(props: any) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nascimento, setDate] = useState('')

  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [modalVisivel, setModalVisivel] = useState(false)
  const [mensagemModal, setMensagemModal] = useState('')

  let data = {
    name: name,
    password: password,
    email: email,
    nascimento: nascimento,
  }
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleDateChange = (text: String) => {
    const cleanedText = text.replace(/\D/g, '')

    if (cleanedText.length <= 2) {
      setDate(cleanedText)
    } else if (cleanedText.length <= 4) {
      setDate(cleanedText.substring(0, 2) + '/' + cleanedText.substring(2))
    } else {
      setDate(
        cleanedText.substring(0, 2) +
        '/' +
        cleanedText.substring(2, 4) +
        '/' +
        cleanedText.substring(4, 8)
      )
    }
  }

  async function handleRegistration(data: any) {
    try {
      const response = await createUser(data);
      setName('')
      setEmail('')
      setPassword('')
      setDate('')
      setMensagemModal('Cadastro realizado com sucesso! Enviamos um e-mail com sua matricula')
      toggleModal()
    } catch (error) {
      setMensagemModal('Erro no cadastro, tente novamente mais tarde')
      toggleModal()
    }
  }

  const toggleModal = () => {
    setModalVisivel(!modalVisivel)
  }

  const samePasswordValue = (e: { preventDefault: () => void }) => {
    if (password == passwordConfirmation && password.length > 8 && password.includes('!' || '@' || '#' || '%' || '&' || '*')) {
      handleRegistration(data)

      setTimeout(() => {
        props.navigation.replace('home');
      }, 5000)

    } else if (password != passwordConfirmation) {
      setMensagemModal('As senhas são diferentes, por favor insira a mesma senha')
      toggleModal()
    } else if (password.length < 8) {
      setMensagemModal('A senha é muito curta, por favor insira mais caracteres')
      toggleModal()
    } else if (password.includes('!' || '@' || '#' || '%' || '&' || '*') == false) {
      setMensagemModal('A senha precisa conter pelo menos um caractere especial(exemplo: !)')
      toggleModal()
    }
  }

  function irLogin() {
    props.navigation.navigate('login')
  }

  return (
    <Background>
      <ScrollView>
        <Header logged={false} />
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisivel}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisivel(!modalVisivel)
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
            value={name}
            onChangeText={setName}
          />
          <View style={styles.separador}></View>
          <Text style={styles.formLabel3}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.separador}></View>
          <Text style={styles.formLabel3}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            keyboardType="numeric"
            value={nascimento}
            onChangeText={handleDateChange}
          />
          <View style={styles.separador}></View>
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
          <View style={styles.separador}></View>
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
          <TouchableOpacity style={styles.button} onPress={samePasswordValue}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText} onPress={irLogin}>Voltar para o login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  )
}
