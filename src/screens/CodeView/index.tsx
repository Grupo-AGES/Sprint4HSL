import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react"
  import styles from '../styles'
  import Background from "@components/Background"
  import { Header } from '../../components/Header'
  import { recoveryCode, getUser, recoveryPassword } from '../../../services/integracao'
  
  export default function CodeView(props: any) {
    const [code, setCode] = useState(['', '', '', '', '', ''])
    const codeInputs: number | any[] = []

    const email = async function user(){
      const data = getUser()
      data.email
    }

    async function reenviaCodigo(email: string) {
      try {
        const response = await recoveryPassword(email)
    props.navigation.navigate('codeView')
      } catch (error) {
        console.error("error reenviar codigo", error)
      }
    }

    async function handleCode(code: number) {
      try {
        const response = await recoveryCode(code)
        setCode([''])
    props.navigation.navigate('changePassword')
      } catch (error) {
        console.error("error code view", error)
      }
    }

    const focusNextInput = (index: number) => {
        if (index < codeInputs.length - 1) {
          codeInputs[index + 1].focus();
        }
      };

      function newLogin(){
        props.navigation.navigate('login')
      }

    return (
      <Background>
        <ScrollView>
        <Header logged={false}/>
          <View style={styles.formContent}>
              <Text style={styles.formLabel1}>Envio confirmado para o email: {email}</Text>

              <Text style={styles.inputText}>Insira o código: </Text>
              <View style={styles.codeInputContainer}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                style={styles.inputCode}
                keyboardType="numeric"
                maxLength={1}
                value={value}
                ref={(input) => (codeInputs[index] = input)}
                onChangeText={(text) => {
                  let newCode = [...code];
                  newCode[index] = text;
                  setCode(newCode);
                  if (text !== '') {
                    focusNextInput(index);
                  }
                }}
                onEndEditing={() => {
                  focusNextInput(index);
                }}
              />
            ))}
          </View>
          <TouchableOpacity onPress={reenviaCodigo}>
              <Text style={styles.textStyle}>Reenviar código</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCode}>
              <Text style={styles.recoveryText}>Conferir</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textStyle} onPress={newLogin}>Voltar para a tela de login</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </Background>
    );
  }