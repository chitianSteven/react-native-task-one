/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
    AsyncStorage,
} from 'react-native';
import Svg from '../svgComponent/svgComponent';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reactotron from 'reactotron-react-native';

class MyCartPageComponent extends Component {
    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';

        this.state = {
            cartWhiteIcon: 'cart-white',
            backIcon: 'backArrow-white',
            recycleBinIcon: 'recycle-bin',
            productionList: [
                {
                    name: 'Xiaomi Mi A3',
                    image: require(prefixForAssets + 'xiaomiMiA3.jpg'),
                    price: {
                        curency: '$',
                        curPrice: 222,
                        prePrice: 224,
                        discount: '9% Off',
                    },
                    color: 'BLUE',
                    quantity: 1,
                    deliveryFee: 1,
                },
            ],
            tax: 2,
            totalPay: 0,
            totalDelivery: 0,
            totalItems: 0,
            defaultCurreny: '$',
        };

        this.getDashLine = this.getDashLine.bind(this);
        this.getCartData = this.getCartData.bind(this);
        this.getTotalPay = this.getTotalPay.bind(this);
        this.getTotalDelivery = this.getTotalDelivery.bind(this);
    }

    componentDidMount() {
        this.getCartData();
    }

    getTotalPay(price, total) {
        var newPrice = 0;
        if (price.substring(0, 2) === '$ ') {
            newPrice = price.substring(2, price.length);
        }
        newPrice = parseInt(newPrice) + parseInt(total);
        return newPrice;
    }

    getTotalDelivery(fee, total) {
        return parseInt(fee) + parseInt(total);
    }

    getCartData() {
        AsyncStorage.getItem('cartData').then(data => {
            var products = data.split('|');
            if (products[0] === 'null') {
                products.shift();
            }
            var newProductionList = [];
            products.forEach(product => {
                AsyncStorage.getItem('cartData-' + product).then(data => {
                    var items = data.split('|');
                    var newProduct = {
                        name: items[0],
                        image: '{uri: "http:' + items[1] + '"',
                        price: {
                            curency: '$',
                            curPrice: items[2],
                            prePrice: items[3] === 'undefined' ? items[2] : items[3],
                            discount: items[4] === 'null' ? 0 : items[4],
                        },
                        color: 'BLUE',
                        quantity: 1,
                        deliveryFee: 1,
                    };
                    newProductionList.push(newProduct);
                    this.setState({
                        productionList: newProductionList,
                        totalPay: this.getTotalPay(newProduct.price.curPrice, this.state.totalPay),
                        totalDelivery: this.getTotalDelivery(newProduct.deliveryFee, this.state.totalDelivery),
                    });
                });
            });
            this.setState({
                totalItems: products.length,
            });
        });
    }

    getDashLine(value) {
        var dots = [];
        for (var i = 0; i < value; i++) {
            dots.push(<View style={styles.dot} />);
        }
        return <View style={styles.dotsLine}>{dots}</View>;
    }

    render() {
        const {
            cartWhiteIcon,
            backIcon,
            recycleBinIcon,
            productionList,
            tax,
            totalDelivery,
            totalItems,
            totalPay,
            defaultCurreny,
        } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <View
                        onStartShouldSetResponder={() =>
                            this.props.navigation.navigate('MainPageScreen')
                        }>
                        <Svg icon={backIcon} size="30" />
                    </View>
                    <Text style={styles.headerBar__title}>My Cart</Text>
                    <View
                        onStartShouldSetResponder={() =>
                            this.props.navigation.navigate('MyCartPageScreen')
                        }>
                        <Svg icon={cartWhiteIcon} size="30" />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <FlatList
                        data={productionList}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index, separators }) => (
                            <View>
                                <View style={styles.contentSection__container}>
                                    <View
                                        style={styles.contentSection__container__item__details}>
                                        <View
                                            style={
                                                styles.contentSection__container__item__details__list
                                            }>
                                            <Text>{item.name}</Text>
                                            <View
                                                style={
                                                    styles.contentSection__container__item__details__list__price
                                                }>
                                                <Text style={styles.text}>
                                                    {item.price.curPrice}
                                                </Text>
                                                <Text style={styles.text_lineThrough}>
                                                    {item.price.prePrice}
                                                </Text>
                                                <Text style={styles.text_colorBlue}>
                                                    {item.price.discount}
                                                </Text>
                                            </View>
                                            <Text style={styles.text}>Color: {item.color}</Text>
                                        </View>
                                        <View>
                                            <Image
                                                source={item.image}
                                                style={{ width: 80, height: 80 }}
                                            />
                                        </View>
                                    </View>
                                    <View
                                        style={styles.contentSection__container__item__details}>
                                        <View
                                            style={
                                                styles.contentSection__container__item__details_border
                                            }>
                                            <Text style={styles.text_big}>
                                                Qty: {item.quantity}
                                            </Text>
                                        </View>
                                        <TouchableHighlight>
                                            <Svg icon={recycleBinIcon} size="30" />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        )}
                    />

                    <View style={styles.contentSection__container}>
                        <View style={styles.contentSection__container__title}>
                            <Text style={styles.text_title}>PRICE DETAILS</Text>
                        </View>
                        <View style={styles.contentSection__container__detailsList}>
                            <View
                                style={
                                    styles.contentSection__container__detailsList__item
                                }>
                                <Text>Price ({totalItems} items)</Text>
                                <Text>
                                    {defaultCurreny}{' '}{totalPay}
                                </Text>
                            </View>
                            <View
                                style={
                                    styles.contentSection__container__detailsList__item
                                }>
                                <Text>Delivery</Text>
                                <Text>
                                    {defaultCurreny}{' '}{totalDelivery}
                                </Text>
                            </View>
                            <View
                                style={
                                    styles.contentSection__container__detailsList__item
                                }>
                                <Text>Tax ({tax}%)</Text>
                                <Text>
                                    {defaultCurreny}{' '}
                                    {(totalPay * tax) / 100}
                                </Text>
                            </View>
                        </View>

                        {this.getDashLine(70)}

                        <View style={styles.contentSection__container__total}>
                            <Text>Amount Payable</Text>
                            <Text>
                                {defaultCurreny}{' '}
                                {totalPay * (1 + tax / 100) +
                                    totalDelivery}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footerSection}>
                        <View style={styles.footerSection__content}>
                            <Icon name="shield" size={40} color="#3497c9" />
                            <View style={styles.footerSection__content__text}>
                                <Text>Safe and Secure Payments.</Text>
                                <Text>100% Authentic products</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default MyCartPageComponent;
