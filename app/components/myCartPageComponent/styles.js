
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
        height: 700,
    },
    contentSection__container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#E7E7E7',
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 10,
        flexDirection: "column",
        justifyContent: "space-between", 
    },
    contentSection__container__item__name: {
        lineHeight: 70,
        marginLeft: 10,
    },
    contentSection__container__item__details: {
        flexDirection: "row",
        justifyContent: "space-between", 
        paddingTop: 10,
    },
    contentSection__container__item__details__list: {
    },
    contentSection__container__item__details__list__price: {
        flexDirection: "row",
        justifyContent: "space-between", 
        width: 120,
        paddingTop: 10,
        paddingBottom: 10,
    },
    contentSection__container__item__details_border: {
        borderWidth: 1,
        lineHeight: 25,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentSection__container__title: {
        width: "100%",
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#E1E1E1",
    },
    contentSection__container__detailsList: {
        flexDirection: "column",
        justifyContent: "space-between", 
    },
    contentSection__container__detailsList__item: {
        flexDirection: "row",
        justifyContent: "space-between", 
        height: 25,
    },
    contentSection__container__total: {
        flexDirection: "row",
        justifyContent: "space-between", 
        paddingTop: 10,
    },
    contentSection__container__detailsList: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    footerSection: {
        backgroundColor: "#e3e3e3",
        marginTop: -10,
        padding: 20,
    },
    footerSection__content: {
        flexDirection: "row",
        justifyContent: "center", 
    },
    footerSection__content__text: {
        paddingLeft: 5,
    },
    dotsLine: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between", 
    },
    dot: {
        width: 2,
        height: 1,
        backgroundColor: "grey",
    },
    text: {
        fontWeight: "bold",
        lineHeight: 25,
    },
    text_title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "grey",
    },
    text_lineThrough: {
        fontWeight: "bold",
        lineHeight: 25,
        textDecorationLine: "line-through",
        color: "grey",
    },
    text_colorBlue: {
        lineHeight: 25,
        fontWeight: "bold",
        color: "#158CBF",
    },
    text_big: {
        lineHeight: 25,
        fontSize: 18,
    },

});

export default styles;