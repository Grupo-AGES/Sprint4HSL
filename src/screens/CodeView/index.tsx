import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react"
  import styles from '../styles'
  import Background from "@components/Background";
  import { Header } from '../../components/Header'
  
  export default function CodeView(props: any) {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const codeInputs: number | any[] = [];
    const email = "anamariabraga@globo.com"

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
              <Text style={styles.formLabel1}>Envio confirmado para o email {email}</Text>

              <Text style={styles.inputText}>Insira o código: </Text>
              <View style={styles.codeInputContainer}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                style={styles.input}
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.recoveryText}>Reenviar código</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonBack}
            >
              <Text style={styles.backText} onPress={newLogin}>Voltar para a tela de login</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </Background>
    );
  }