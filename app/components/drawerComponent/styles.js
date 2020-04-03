
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#158CBF',
        paddingTop: 20,
        paddingBottom: 30,
        paddingLeft: 30,
    },
    header__title: {
        color: '#008c91',
        fontSize: 20,
        fontWeight: "bold",
    },
    section: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',

    },
    section__title: {
        fontSize: 12,
    },
    section__item: {
        flexDirection: "row",
        paddingTop: 20,
    },
    section__item__label: {
        marginLeft: 30,
        fontWeight: "bold",
        lineHeight: 25,
    },
});

export default styles;