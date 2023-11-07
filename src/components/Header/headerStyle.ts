import { StyleSheet } from "react-native";

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
    }
});

export default styles;