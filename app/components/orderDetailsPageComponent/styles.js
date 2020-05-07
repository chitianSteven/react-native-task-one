
import {
    StyleSheet,
} from 'react-native';
import { withOrientation } from 'react-navigation';

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
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentSection__container: {
        padding: 10,
        borderColor: '#E7E7E7',
        borderRadius: 5,
        borderWidth: 2,
    },
    contentSection__container__item: {
        flexDirection: "row",
        justifyContent: "space-between", 
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingBottom: 10,
    },
    contentSection__container__item__name: {
        lineHeight: 70,
        marginLeft: 10,
    },
    contentSection__container__item__image: {
        width: 60,
        height: 70,
    },
    contentSection__container__bottom: {
        flexDirection: "row",
        justifyContent: "space-between", 
    },
    contentSection__container__viewOrderDetails: {
        lineHeight: 20,
        color: '#158CBF',
    },
    contentSection__container__date: {
        lineHeight: 20,
        fontSize: 10,
    }
});

export default styles;