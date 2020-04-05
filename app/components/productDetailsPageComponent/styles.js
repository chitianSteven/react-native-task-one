
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
    headerBar__searchAndCart: {
        flexDirection: 'row',
        width: 80,
        justifyContent: "space-between",
    },
    productMainInfoArea: {
        borderBottomWidth: 15,
        borderBottomColor: '#D5D5D5',
    },
    productMainInfoArea__imageContainer: {
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    productMainInfoArea__image: {
        width: 300,
        height: 300,
    },
    productMainInfoArea__stockStatus: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 5,
        paddingRight: 15,
    },
    productMainInfoArea__stockStatus__container: {
        backgroundColor: '#158CBF',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
    productMainInfoArea__stockStatus__label: {
        color: 'white',
        fontSize: 12,
    },
    productMainInfoArea__productName: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 10,
    },  
    productMainInfoArea__price: {
        flexDirection: "row",
        paddingBottom: 10,
    },
    productMainInfoArea__price__curPrice: {
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    productMainInfoArea__price__prePrice: {
        fontSize: 12,
        paddingLeft: 5,
        textDecorationLine: "line-through",
    },
    productMainInfoArea__price__discount: {
        fontSize: 12,
        paddingLeft: 5,
        color: '#158CBF',
        fontWeight: "bold",
    },
    colorSelectionArea: {
        borderBottomWidth: 15,
        borderBottomColor: '#D5D5D5',
        paddingBottom: 10,
    },
    colorSelectionArea__title: {
        color: '#158CBF',
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    colorSelectionArea__options: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },  
    colorSelectionArea__button: {
        backgroundColor: '#D5D5D5',
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        padding: 5,
    },
    colorSelectionArea__button__label: {
        fontSize: 14,
        fontWeight: "bold",
    },
    descriptionArea: {
    }, 
    descriptionArea__description: {
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 20,
    },
    actionButtonArea: {
        flexDirection: "row",
        marginTop: 20,
        height: 50,
    },
    actionButtonArea__button: {
        width: '50%',
        justifyContent: "center",
        alignItems: "center",
    },
    actionButtonArea__button__wishList: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    actionButtonArea__button__wishListLabel: {
        paddingLeft: 5,
        fontWeight: "bold",
    },
    actionButtonArea__button__addToCart: {
        backgroundColor: '#158CBF',
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    actionButtonArea__button__addToCartlabel: {
        color: 'white',
    }
});

export default styles;