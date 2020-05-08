import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';
import MapView from 'react-native-maps';

class MapViewPageComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        
        this.state = {
            cartWhiteIcon: require(prefixForAssets + 'cart-white.svg'),
            backIcon: require(prefixForAssets + 'backArrow-white.svg'),
        }
    }

    render() {
        const { cartWhiteIcon, backIcon } = this.state;

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
                    <MapView
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default MapViewPageComponent;