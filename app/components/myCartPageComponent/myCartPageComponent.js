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
import Icon from 'react-native-vector-icons/FontAwesome';


class MyCartPageComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        
        this.state = {
            cartWhiteIcon: require(prefixForAssets + 'cart-white.svg'),
            backIcon: require(prefixForAssets + 'backArrow-white.svg'),
            recycleBinIcon: require(prefixForAssets + 'recycle-bin.svg'),
            productionList: [{
                name: "Xiaomi Mi A3",
                image: require(prefixForAssets + 'xiaomiMiA3.jpg'),
                price: {
                    curency: "$",
                    curPrice: 222,
                    prePrice: 224,
                    discount: "9% Off"
                },
                color: "BLUE",
                quantity: 1,
                deliveryFee: 1,
            }],
            tax: 2,
        }

        this.getDashLine = this.getDashLine.bind(this);
    }

    getDashLine(value) {
        var dots = [];
        for (var i = 0; i < value; i++) {
            dots.push(
                <View style={styles.dot}></View>
            );
        }
    return (<View style={styles.dotsLine}>{dots}</View>);
    }

    render() {
        const { cartWhiteIcon, backIcon, recycleBinIcon, productionList, tax } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MainPageScreen')}>
                        <SvgUri source={backIcon} width="30" height="30"
                        />
                    </View>
                    <Text style={styles.headerBar__title}>My Cart</Text>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MyCartPageScreen')}>
                        <SvgUri source={cartWhiteIcon} width="30" height="30"
                        />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <View>
                        <FlatList
                            data={productionList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index, separators }) => (
                                <View>
                                    <View style={styles.contentSection__container}>
                                        <View style={styles.contentSection__container__item__details}>
                                            <View style={styles.contentSection__container__item__details__list}>
                                                <Text>{item.name}</Text>
                                                <View style={styles.contentSection__container__item__details__list__price}>
                                                    <Text style={styles.text}>{item.price.curency} {item.price.curPrice}</Text>
                                                    <Text style={styles.text_lineThrough}>{item.price.curency} {item.price.prePrice}</Text>
                                                    <Text style={styles.text_colorBlue}>{item.price.discount}</Text>
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
                                        <View style={styles.contentSection__container__item__details}>
                                            <View style={styles.contentSection__container__item__details_border}>
                                                <Text style={styles.text_big}>Qty: {item.quantity}</Text>
                                            </View>
                                            <TouchableHighlight>
                                                <SvgUri source={recycleBinIcon} width="30" height="30"
                                                />
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                    
                                    
                                    <View style={styles.contentSection__container}>
                                        <View style={styles.contentSection__container__title}>
                                            <Text style={styles.text_title}>PRICE DETAILS</Text>
                                        </View>
                                        <View style={styles.contentSection__container__detailsList}>
                                            <View style={styles.contentSection__container__detailsList__item}>
                                                <Text>Price ({item.quantity} items)</Text>
                                                <Text>{item.price.curency} {item.price.curPrice}</Text>
                                            </View>
                                            <View style={styles.contentSection__container__detailsList__item}>
                                                <Text>Delivery</Text>
                                                <Text>{item.price.curency} {item.deliveryFee}</Text>
                                            </View>
                                            <View style={styles.contentSection__container__detailsList__item}>
                                                <Text>Tax ({tax}%)</Text>
                                                <Text>{item.price.curency} {item.price.curPrice * tax / 100}</Text>
                                            </View>
                                        </View>

                                        {this.getDashLine(70)}

                                        <View style={styles.contentSection__container__total}>
                                            <Text>Amount Payable</Text>
                                            <Text>{item.price.curency} {item.price.curPrice * (1 + tax / 100) + item.deliveryFee}</Text>
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
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default MyCartPageComponent;