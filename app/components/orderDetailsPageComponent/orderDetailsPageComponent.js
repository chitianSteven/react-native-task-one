import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';


class OrderDetailsPageComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        
        this.state = {
            cartWhiteIcon: require(prefixForAssets + 'cart-white.svg'),
            backIcon: require(prefixForAssets + 'backArrow-white.svg'),
            orderList: [
                {
                    name: 'OPPO K3',
                    image: require(prefixForAssets + 'oppoK3.jpg'),
                    price: 150,
                    color: 'BLUE',
                    curency: '$',
                    quantity: 1,
                },
                {
                    name: 'Xiaomi Mi A3',
                    image: require(prefixForAssets + 'xiaomiMiA3.jpg'),
                    price: 222,
                    color: 'BLUE',
                    curency: '$',
                    quantity: 1,
                }
            ],
            timeStamp: {
                date: "30/11/2019",
                time: "10:10:34",
            }
        }
    }

    render() {
        const { cartWhiteIcon, backIcon, orderList, timeStamp } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MainPageScreen')}>
                        <SvgUri source={backIcon} width="30" height="30"
                        />
                    </View>
                    <Text style={styles.headerBar__title}></Text>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MyCartPageScreen')}>
                        <SvgUri source={cartWhiteIcon} width="30" height="30"
                        />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <View style={styles.contentSection__container}>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Order Id:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__value}>0D3489488519356</Text>
                            </View>
                        </View>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Order Date:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__value}>30/11/2019 10:10:34</Text>
                            </View>
                        </View>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Total Amount:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__value}>$ 380.44</Text>
                            </View>
                        </View>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Payment Mode:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__value}>COD</Text>
                            </View>
                        </View>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Shipping Address:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('MapViewPageScreen')}>
                                    <Text style={styles.text__value}>test test, 12, no, Lenin street, karaganda, no, 1234, 838383838383283</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.contentSection__container__row}>
                            <View style={styles.contentSection__container__row__cell}>
                                <Text style={styles.text__label}>Status:</Text>
                            </View>
                            <View style={styles.contentSection__container__row__cell}>
                                <TouchableHighlight>
                                    <Text style={styles.text__value__green}>In-Processing</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentSection__container}>
                        <View style={styles.contentSection__container__title}>
                            <Text style={styles.text__title}>Ordered Products:</Text>
                        </View>
                        <FlatList
                            data={orderList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index, separators }) => (
                                <TouchableHighlight>
                                    <View style={styles.contentSection__container__item}>
                                        <View>
                                            <Text style={styles.contentSection__container__item__name}>{item.name}</Text>
                                            <Text style={styles.contentSection__container__item__details}>Price: {item.curency} {item.price}</Text>
                                            <Text style={styles.contentSection__container__item__details}>Color: {item.color}</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.contentSection__container__item__image}
                                                source={item.image}
                                            />
                                            <Text style={styles.contentSection__container__item__details}>Qty: {item.quantity}</Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default OrderDetailsPageComponent;