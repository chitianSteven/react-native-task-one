
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import Svg from '../svgComponent/svgComponent';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

class DrawerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileIcon: 'profile',
            cartBlueIcon: 'cart-blue',
            cartTickIcon: 'cart-tick',
            heartIcon: 'heart',
            mailIcon: 'mail',
            callIcon: 'call',
            shareIcon: 'share',
        }
        this.showSharePopup = this.showSharePopup.bind(this);
    }

    showSharePopup() {
        const shareOptions = {
            title: 'Share via',
            message: 'some message',
            url: 'some share url',
            social: Share.Social.WHATSAPP,
            whatsAppNumber: "9199999999",  // country code + phone number
            filename: 'test' , // only for base64 file in Android
        };
        Share.shareSingle(shareOptions);
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
                            <Svg icon={profileIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Profile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            {/* <Svg icon={heartIcon} width="25" height="25"
                            /> */}
                            <Icon name="heart" size={25} color="#3497c9" />
                            <Text style={styles.section__item__label}>My Wish List</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <Svg icon={cartBlueIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Cart</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                         onPress={()=>{this.props.navigation.navigate('OrderListPageScreen');}}>
                        <View style={styles.section__item}>
                            <Svg icon={cartTickIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>My Orders</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.section__title}>Support</Text>
                    
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <Svg icon={mailIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>Email</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.section__item}>
                            <Svg icon={callIcon} width="25" height="25"
                            />
                            <Text style={styles.section__item__label}>Call</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.section__title}>Others</Text>
                    
                    <TouchableHighlight onPress={this.showSharePopup}>
                        <View style={styles.section__item}>
                            <Svg icon={shareIcon} width="25" height="25"
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