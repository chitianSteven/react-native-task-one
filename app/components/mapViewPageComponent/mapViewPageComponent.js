import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Svg from '../svgComponent/svgComponent';
import styles from './styles';
import MapView from 'react-native-maps';

class MapViewPageComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            cartWhiteIcon: 'cart-white',
            backIcon: 'backArrow-white',
        }
    }

    render() {
        const { cartWhiteIcon, backIcon } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MainPageScreen')}>
                        <Svg icon={backIcon} width="30" height="30"
                        />
                    </View>
                    <Text style={styles.headerBar__title}></Text>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MyCartPageScreen')}>
                        <Svg icon={cartWhiteIcon} width="30" height="30"
                        />
                    </View>
                </View>
                <View style={styles.contentSection}>
                    <MapView
                        style={styles.contentSection__mapView}
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