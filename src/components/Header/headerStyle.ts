import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerLoggado: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#005CA3',
    },
    headerNoLoggado: {
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#F3F6FA',
    },
    imageHeaderLoggado: {
        height: 42,
        width: 42, 
        marginRight: 12
    },
    imageHeader: {
        marginLeft: '25%',
        height: '20%',
        width: '50%'
    },
    formContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    }
});

export default styles;
