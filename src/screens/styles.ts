import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005CA3',
        width: '100%',
        height: '100%',
    },
    containerLogged: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
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
    buttonRecovery: {
        alignItems: 'center',
        marginTop: 20,
    },
    recoveryText: {
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
        inputText: {
            marginTop: 20,
            width: 300,
            color: '#005CA3',
            marginBottom: 5,
            marginLeft: 80,
        },
        codeInputContainer: {
            flexDirection: 'row',
            margin: 5,
        },
        buttonBack: {
            marginTop: 300,
        },
        backText: {
            color: '#005CA3',
            fontSize: 15,
        },
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

export default styles;