
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    background: {},
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
    searchBoxArea: {
        height: 50,
        backgroundColor: '#158CBF',
    },
    searchBoxArea__container: {
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    searchBoxArea__container__searchIcon: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    searchBoxArea__container__inputField: {
        height: 40,
        paddingLeft: 5,
        fontSize: 14,
    },
    categoryList: {
        height: 120,
        borderBottomWidth: 15,
        borderBottomColor: '#EBEBEB',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    categoryList__item: {
        width: 90,
        paddingTop: 20,
        paddingLeft: 10,
        alignItems: "center",
    },
    categoryList__item__imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        overflow: "hidden",
    },
    categoryList__item__image: {
        width: 50,
        height: 50,
    },
    categoryList__item__name: {
        fontSize: 12,
    },
    productionList: {
        height: 800,
    },
    productionList__headerBar: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productionList__headerBar__title: {
        color: '#2494C3',
        fontSize: 22,
        paddingLeft: 10,
        paddingTop: 5,
    },
    productionList__headerBar__button: {
        height: 25,
        backgroundColor: '#158CBF',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    productionList__headerBar__button__label: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        lineHeight: 22,
    },
    productionList__content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productionList__content__item: {
        width: '47%',
        height: 200,
        marginLeft: '2%',
        marginTop: 5,
        borderColor: '#E7E7E7',
        borderRadius: 5,
        borderWidth: 1,
    },
    productionList__content__item__imageContainer: {
        width: '100%',
        height: '80%',
    },
    productionList__content__item__image: {
        width: '100%',
        height: '100%',
    },
    productionList__content__item__name: {
        fontSize: 12,
        paddingLeft: 5,
    },
    productionList__content__item__price: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    productionList__content__item__price__curPrice: {
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 5,
    },
    productionList__content__item__price__prePrice: {
        fontSize: 12,
        paddingLeft: 5,
        textDecorationLine: "line-through",
    },
    productionList__content__item__price__discount: {
        fontSize: 12,
        paddingLeft: 5,
        color: '#158CBF',
        fontWeight: "bold",
    },
});

export default styles;