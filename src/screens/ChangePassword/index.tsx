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
  
  
  export default function ChangePassword(props: any) {

    function newLogin(){
        props.navigation.navigate('login')
      }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    bottom: 0,
  },
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#005CA3",
    justifyContent: "center",
  },
  imageHeader: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  formContent: {
    width: "100%",
    height: "100%",
    marginTop: 70,
  },
  input: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#005CA3",
    width: "80%",
    height: 50,
    padding: 10,
    marginTop: 20,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#005CA3",
    width: 300,
    height: 50,
    borderRadius: 8,
    marginTop: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  buttonRegister: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
  },
  registerText: {
    color: "#005CA3",
    fontSize: 20,
    textAlign: "center",
  },
});

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.imageHeader}>
              <Image source={require("../../../assets/Vector.png")} />
            </View>
          </View>
          <View style={styles.formContent}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha atual"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              placeholder="Digite sua nova senha"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              placeholder="Repite sua nova senha"
              keyboardType="default"
            />
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Salvar alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText} onPress={newLogin}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
