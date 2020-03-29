
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    background: {
    },
    navigationArea: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    titleArea: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleArea__title: {
        fontSize: 32,
        color: 'deepskyblue',
    },
    inputArea: {
        height: 300,
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputArea__inputField: {
        fontSize: 18,
        paddingTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    signUpArea: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'stretch',
    },
    signUpArea__Button: {
        color: 'white',
        fontSize: 32,
    },
    signInArea: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    link: {
        color: '#5D79F4',
        fontSize: 16,
    },
    bottom: {
        height: 170,
    },
});

export default styles;