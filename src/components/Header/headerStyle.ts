import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerLoggado: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#005CA3',
    },
    headerNoLoggado: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        height: 197,
        backgroundColor: '#F3F6FA',
    },
    imageHeaderLoggado: {
        height: 26,
        width: 26
    },
    imageHeader: {
        marginTop: 20,
        height: "auto",
    },
    formContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    menuHeader: {
        textDecorationColor: '#fffff'
    }
});

export default styles;
