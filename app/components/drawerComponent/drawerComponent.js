
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';

class DrawerComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        this.state = {
            profileIcon: require(prefixForAssets + 'profile.svg'),
            cartBlueIcon: require(prefixForAssets + 'cart-blue.svg'),
            cartTickIcon: require(prefixForAssets + 'cart-tick.svg'),
            heartIcon: require(prefixForAssets + 'heart.svg'),
            mailIcon: require(prefixForAssets + 'mail.svg'),
            callIcon: require(prefixForAssets + 'call.svg'),
            shareIcon: require(prefixForAssets + 'share.svg'),
        }
    }

    render() {
        const { profileIcon, cartBlueIcon, cartTickIcon, heartIcon, mailIcon, callIcon, shareIcon } = this.state;

        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.header__title}>Ecommerce</Text>
                    <Text style={styles.header__title}>Store</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.section__title}>My Account</Text>
                    
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={profileIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Profile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={heartIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Wish List</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={cartBlueIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Cart</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={cartTickIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Orders</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.section__title}>Support</Text>
                    
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={mailIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>Email</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={callIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>Call</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.section__title}>Others</Text>
                    
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <SvgUri source={shareIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>Share</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

export default DrawerComponent;