import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
} from 'react-native';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
} from 'react-native-popup-dialog';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';
import transfromEscapeCharacter from '../../reducers/transfromEscapeCharacter';
import Reactotron from 'reactotron-react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


class OrderListPageComponent extends Component {

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
                        <SvgUri source={backIcon} width="30" height="30"
                        />
                    </View>
                    <Text style={styles.headerBar__title}>My Orders</Text>
                    <View>
                        <SvgUri source={cartWhiteIcon} width="30" height="30"
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
                                <View>
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