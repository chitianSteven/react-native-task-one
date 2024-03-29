import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
} from 'react-native';
import Svg from '../svgComponent/svgComponent';
import styles from './styles';


class OrderListPageComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        
        this.state = {
            cartWhiteIcon: 'cart-white',
            backIcon: 'backArrow-white',
            orderList: [
                {
                    name: 'OPPO K3',
                    image: require(prefixForAssets + 'oppoK3.jpg'),
                },
                {
                    name: 'Xiaomi Mi A3',
                    image: require(prefixForAssets + 'xiaomiMiA3.jpg'),
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
                        <Svg icon={backIcon} size="30"
                        />
                    </View>
                    <Text style={styles.headerBar__title}>My Orders</Text>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MyCartPageScreen')}>
                        <Svg icon={cartWhiteIcon} size="30"
                        />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <View style={styles.contentSection__container}>
                        <FlatList
                            data={orderList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index, separators }) => (
                                <TouchableHighlight>
                                    <View style={styles.contentSection__container__item}>
                                        <Text style={styles.contentSection__container__item__name}>{item.name}</Text>
                                        <Image
                                            style={styles.contentSection__container__item__image}
                                            source={item.image}
                                        />
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                        <View style={styles.contentSection__container__bottom}>
                            <TouchableHighlight>
                                <View onStartShouldSetResponder={() => this.props.navigation.navigate('OrderDetailsPageScreen')}>
                                    <Text style={styles.contentSection__container__viewOrderDetails}>View Order Details</Text>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.contentSection__container__date}>Date: {timeStamp.date} {timeStamp.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default OrderListPageComponent;