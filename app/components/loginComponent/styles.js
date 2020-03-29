
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    background: {
    },
    titleArea: {
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleArea__title: {
        fontSize: 32,
        color: 'deepskyblue',
    },
    inputArea: {
        height: 150,
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputArea__inputField: {
        fontSize: 18,
        paddingTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    signInArea: {
        height: 150,
        paddingLeft: 20,
        paddingRight: 20,
    },
    signInArea__forgotPassword: {
        alignItems: 'flex-end',
    },
    signInArea__signIn: {
        paddingTop: 25,
    },
    signInArea__signIn__Button: {
        color: 'white',
        fontSize: 32,
    },
    signInArea__signUp: {
        paddingTop: 20,
        alignItems: 'center',
    },
    link: {
        color: '#5D79F4',
        fontSize: 16,
    },
    bottom: {
        height: 150,
    },
});

export default styles;