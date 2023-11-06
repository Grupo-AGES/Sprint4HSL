import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  
  export default function RecoveryMatricula(props: any) {

    function newLogin(){
        props.navigation.navigate('login')
      }

      function handleNoLogin(){
        props.navigation.navigate('register')
      }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005CA3',
        width: '100%',
        height: '100%',
    },
    header: {
        padding: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    imageHeader: {
        marginTop: 20,
    },
    formContent: {
        width: '100%',
        height: '100%',
        marginTop: 50,
    },
    formLabel: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 23,
        marginLeft: 80,
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        width: 300,
        height: 50,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    image: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 65,
        marginTop: -55,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#4EB0E3',
        width: 300,
        height: 50,
        borderRadius: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    buttonBack: {
        alignItems: 'center',
        marginTop: 20,
    },
    backText: {
        color: '#ffffff',
        fontSize: 14,
    },
    buttonRegister: {
        alignItems: 'center',
        marginTop: 20,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 14,
    },
      
});

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.imageHeader}>
              <Image source={require("../../../assets/logoBlue.png")} />
            </View>
          </View>
          <View style={styles.formContent}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText} onPress={handleNoLogin}>
                Não possui login? Cadastre-se aqui!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBack}>
              <Text style={styles.backText} onPress={newLogin}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }