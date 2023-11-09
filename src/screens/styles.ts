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
        backgroundColor: '#F3F6FA',
        width: '100%',
        height: '100%',
    },
    textBDay: {
        color: '#005CA3;'
    },
    formContent: {
        width: '100%',
        height: '100%',
        marginTop: 50,
    },
    formLabel1: {
        color: '#F3F6FA',
        fontSize: 12,
        marginTop: 104,
        marginLeft: 39,
    },
    
    formLabel2: {
        color: '#F3F6FA',
        fontSize: 12,
        marginTop: 2,
        marginLeft: 39,
    },
    formLabel3: {
        color: '#F3F6FA',
        fontSize: 12,
        marginTop: 2,
        marginLeft: 39,
        borderWidth: 1,
        borderColor: '#005CA3',
        borderRadius: 10,
        height: 35,
        width: 283,
    },

    formLabel4: {
        color: '#F3F6FA',
        marginTop: -20,
        fontSize: 12,
        padding: 10,
        marginLeft: 39,
    },

    formLabel5: {
        color: '#F3F6FA',
        marginTop: 0,
        marginBottom: -20,
        fontSize: 12,
        padding: 25,
        marginLeft: 24,
    },

    input2: {
        backgroundColor: '#F3F6FA',
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },

    input: {
        backgroundColor: '#F3F6FA',
        borderRadius: 10,
        width: 283,
        height: 35,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    image: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 57,
        marginTop: -48,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#4EB0E3',
        width: 283,
        height: 35,
        borderRadius: 10,
        marginTop: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        alignSelf: 'center',
        backgroundColor: '#77C1E9',
        width: 283,
        height: 35,
        borderRadius: 10,
        marginTop: 27,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#005CA3',

    },
    buttonText: {
        color: '#F3F6FA',
        fontSize: 12,
    },
    buttonText2: {
        color: '#F3F6FA',
        fontSize: 12,
    },
    buttonRecoverySenha: {
        alignItems: 'center',
        marginTop: 35,
    },
    buttonRecoveryMatricula: {
        alignItems: 'center',
        marginTop: 12,
    },
    recoveryText: {
        color: '#F3F6FA',
        fontSize: 12,
    },
    buttonRegister: {
        alignItems: 'center',
        marginTop: 12,
    },
    buttonRegister2: {
        alignItems: 'center',
        marginTop: 35,
    },

    registerText: {
        color: '#F3F6FA',
        fontSize: 12,
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
            backgroundColor: '#F3F6FA',
            borderRadius: 15,
            padding: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
            width: 2,
            height: 4,
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
