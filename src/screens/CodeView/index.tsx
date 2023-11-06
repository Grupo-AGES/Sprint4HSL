import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function CodeView(props: any) {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const codeInputs: number | any[] = [];
    const email = "anamariabraga@globo.com"

    const focusNextInput = (index: number) => {
        if (index < codeInputs.length - 1) {
          codeInputs[index + 1].focus();
        }
      };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#005CA3',
    },
    imageHeader: {
        marginTop: 20,
    },
    formContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    formLabel: {
        marginTop: 20,
        color: '#005CA3',
    },
    inputText: {
        marginTop: 20,
        width: 300,
        color: '#005CA3',
        marginBottom: 5,
        marginLeft: 80,
    },
    input: {
        height: 40,
        borderColor: '#005CA3',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        margin: 3,
        backgroundColor: '#C2D7E9',
        fontSize: 20,
    },
    codeInputContainer: {
        flexDirection: 'row',
        margin: 5,
    },
    buttonRecovery: {
        marginTop: 20,
    },
    recoveryText: {
        color: '#005CA3',
        fontSize: 15,
    },
    buttonBack: {
        marginTop: 300,
    },
    backText: {
        color: '#005CA3',
        fontSize: 15,
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
          <View style={styles.formContent}>
              <Text style={styles.formLabel}>Envio confirmado para o email {email}</Text>

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
            <TouchableOpacity style={styles.buttonRecovery}>
              <Text style={styles.recoveryText}>Reenviar código</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonBack}
            >
              <Text style={styles.backText}>Voltar para a tela de login</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }