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
            }],
            tax: 2,
        }
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
                    <View style={styles.contentSection__container}>
                        <FlatList
                            data={productionList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index, separators }) => (
                                <View style={styles.contentSection__container__item}>
                                    <View style={styles.contentSection__container__item__details}>
                                        <View>
                                            <Text>{item.name}</Text>
                                            <View>
                                                <Text>{item.price.curPrice}</Text>
                                                <Text>{item.price.prePrice}</Text>
                                                <Text>{item.price.discount}</Text>
                                            </View>
                                            <Text>Color: {item.color}</Text>
                                        </View>
                                        <View>
                                            <Image
                                                source={item.image}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <View>
                                            <Text>Qty: {item.quantity}</Text>
                                        </View>
                                        <TouchableHighlight>
                                            <SvgUri source={recycleBinIcon} width="30" height="30"
                                            />
                                        </TouchableHighlight>
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