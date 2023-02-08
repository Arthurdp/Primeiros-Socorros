import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    text: {
        fontSize: 17,
        color: 'black',
        padding: 10
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnTextHolder: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)'
    },
    Btn: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

export default styles;