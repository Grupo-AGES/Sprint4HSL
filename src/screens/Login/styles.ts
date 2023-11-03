import { StyleSheet } from "react-native";

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
      
});

export default styles;