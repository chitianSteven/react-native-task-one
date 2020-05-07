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
                    <Text style={styles.headerBar__title}></Text>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MyCartPageScreen')}>
                        <SvgUri source={cartWhiteIcon} width="30" height="30"
                        />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <View style={styles.contentSection__container}>
                        <View>
                            <Text>Order Id:</Text>
                            <Text>0D3489488519356</Text>
                        </View>
                        <View>
                            <Text>Order Date:</Text>
                            <Text>30/11/2019 10:10:34</Text>
                        </View>
                        <View>
                            <Text>Total Amount:</Text>
                            <Text>$ 380.44</Text>
                        </View>
                        <View>
                            <Text>Payment Mode:</Text>
                            <Text>COD</Text>
                        </View>
                        <View>
                            <Text>Shipping Address:</Text>
                            <TouchableHighlight>
                                <Text>test test, 12, no, Lenin street, karaganda, no, 1234, 838383838383283</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text>Status:</Text>
                            <TouchableHighlight>
                                <Text>In-Processing</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.contentSection__container}>
                        <Text>Ordered Products:</Text>
                        <FlatList
                            data={orderList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index, separators }) => (
                                <TouchableHighlight>
                                    <View style={styles.contentSection__container__item}>
                                        <View>
                                            <Text style={styles.contentSection__container__item__name}>{item.name}</Text>
                                            <Text>Price:</Text>
                                            <Text>Color:</Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={styles.contentSection__container__item__image}
                                                source={item.image}
                                            />
                                            <Text>Qty: 1</Text>
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