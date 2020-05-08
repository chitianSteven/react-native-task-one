
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
    },
    contentSection__container: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#E7E7E7',
        borderBottomWidth: 10,
    },
    contentSection__container__item: {
        flexDirection: "row",
        justifyContent: "space-between", 
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingBottom: 10,
    },
    contentSection__container__item__name: {
        lineHeight: 30,
        marginLeft: 10,
    },
    contentSection__container__item__details: {
        fontWeight: "bold",
        lineHeight: 30,
        marginLeft: 10,
    },
    contentSection__container__item__image: {
        width: 60,
        height: 70,
    },
    contentSection__container__row: {
        flexDirection: "row",
        justifyContent: "space-between", 
        paddingBottom: 10,
    },
    contentSection__container__row__cell: {
        width: "50%",
    },
    contentSection__container__title: {
        paddingTop: 10,
        alignItems: "center",
    },
    text__label: {
        fontSize: 16,
        color: '#158CBF',
    },
    text__value: {
        fontSize: 16,
    },
    text__value__green: {
        fontSize: 16,
        color: "green",
    },
    text__title: {
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default styles;