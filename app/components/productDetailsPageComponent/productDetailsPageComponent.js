
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image';
import styles from './styles';
import Reactotron from 'reactotron-react-native'

class ProductDetailsPageComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        this.state = {
            searchIcon: require(prefixForAssets + 'search2.svg'),
            cartWhiteIcon: require(prefixForAssets + 'cart-white.svg'),
            backIcon: require(prefixForAssets + 'backArrow-white.svg'),
            heartEmptyIcon: require(prefixForAssets + 'heart-empty.svg'),
            product: {
                productName: 'Xiaomi Mi A3',
                picture: require(prefixForAssets + 'xiaomiMiA3.jpg'),
                curPrice: '$ 222',
                prePrice: '$ 224',
                discount: '9% Off',
                images: [require(prefixForAssets + 'xiaomiMiA3.jpg'), require(prefixForAssets + 'xiaomiMiA3.jpg')],
                colorOptions: ['BLUE'],
                description: '48+8+2MP AI triple rear camera with portrait mode, HDR, PDAF supported | 32MP front camera with f2.0, 1/2.8 inch pixel size, portrait mode, HDR supported.',
            }
        };

        this.addToCart = this.addToCart.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
    }

    addToCart() {

    }

    addToWishList() {

    }

    render() {
        const { searchIcon, cartWhiteIcon, backIcon, heartEmptyIcon, product } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <View onStartShouldSetResponder={() => this.props.navigation.navigate('MainPageScreen')}>
                        <SvgUri source={backIcon} width="30" height="30"
                        />
                    </View>
                    <View style={styles.headerBar__searchAndCart}>
                        <SvgUri source={searchIcon} width="30" height="30"
                        />
                        <SvgUri source={cartWhiteIcon} width="30" height="30"
                        />
                    </View>
                </View>
                
                <View style={styles.productMainInfoArea}>
                    <View>
                        <SliderBox
                            ImageComponent={FastImage}
                            images={product.images}
                            dotColor='#158CBF'
                            onCurrentImagePressed={index =>
                                console.warn(`image ${index} pressed`)
                            }
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            autoplay
                            circleLoop
                            sliderBoxHeight={250}            
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: -50,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 10
                            }}
                        />
                    </View>

                    <View style={styles.productMainInfoArea__stockStatus}>
                        <View style={styles.productMainInfoArea__stockStatus__container}>
                            <Text style={styles.productMainInfoArea__stockStatus__label}>Instock</Text>
                        </View>
                    </View>

                    <Text style={styles.productMainInfoArea__productName}>{product.productName}</Text>
                    <View style={styles.productMainInfoArea__price}>
                        <Text style={styles.productMainInfoArea__price__curPrice}>{product.curPrice}</Text>
                        <Text style={styles.productMainInfoArea__price__prePrice}>{product.prePrice}</Text>
                        <Text style={styles.productMainInfoArea__price__discount}>{product.discount}</Text>
                    </View>
                </View>

                <View style={styles.colorSelectionArea}>
                    <Text style={styles.colorSelectionArea__title}>Select color:</Text>
                    <View style={styles.colorSelectionArea__options}>
                        {product.colorOptions.map(function(option) {
                            return (
                                <TouchableHighlight style={styles.colorSelectionArea__button}>
                                    <Text style={styles.colorSelectionArea__button__label}>{option}</Text>
                                </TouchableHighlight>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.descriptionArea}>
                    <Text style={styles.colorSelectionArea__title}>Description:</Text>
                    <Text style={styles.descriptionArea__description}>{product.description}</Text>
                </View>
                <View style={styles.actionButtonArea}>
                    <TouchableHighlight style={styles.actionButtonArea__button}>
                        <View style={styles.actionButtonArea__button__wishList}>
                            <View style={styles.actionButtonArea__button__wishListIcon}>
                                <SvgUri source={heartEmptyIcon} width="25" height="25"
                                />
                            </View>
                            <Text style={styles.actionButtonArea__button__wishListLabel}>WishList</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.actionButtonArea__button}>
                        <View style={styles.actionButtonArea__button__addToCart}>
                            <Text style={styles.actionButtonArea__button__addToCartlabel}>Add To Cart</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default ProductDetailsPageComponent;