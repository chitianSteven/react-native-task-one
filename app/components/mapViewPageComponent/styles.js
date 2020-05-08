
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    background: {
        paddingBottom: 80,
    },
    headerBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-between", 
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#158CBF',
    },
    headerBar__title: {
        fontSize: 18,
        color: 'white',
    },
    contentSection: {
        height: 500,
        width: "100%",
        borderWidth: 1,
    }
});

export default styles;