
import React, { Component } from 'react';
import {
    View,
    Text,
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
// import { SliderBox } from "react-native-image-slider-box";
// import FastImage from 'react-native-fast-image';
import styles from './styles';
import transfromEscapeCharacter from '../../reducers/transfromEscapeCharacter';
import Reactotron from 'reactotron-react-native'
import { ScrollView } from 'react-native-gesture-handler';


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
                dialogTitle: '',
                dialogMessage: '',
                showInfoDialog: false,
                productName: null,
                picture: null,
                curPrice: null,
                prePrice: null,
                discount: null,
                // images: [require(prefixForAssets + 'xiaomiMiA3.jpg'), require(prefixForAssets + 'xiaomiMiA3.jpg')],
                colorOptions: ['BLUE'],
                description: null,
            },
        };

        this.addToCart = this.addToCart.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
    }

    componentDidMount() {
        const { params } = this.props.route;
        this.setState({
            product: {
                productName: params.productName,
                picture: params.picture,
                curPrice: params.curPrice,
                prePrice: params.prePrice,
                discount: params.discount,
                // images: [require(prefixForAssets + 'xiaomiMiA3.jpg'), require(prefixForAssets + 'xiaomiMiA3.jpg')],
                colorOptions: ['BLUE'],
                description: transfromEscapeCharacter.esc2string(params.description),
            }
        })
    }

    addToCart() {
        this.setState({
            dialogTitle: 'Added to cart',
            dialogMessage: 'Please check your cart for newly added item.',
            showInfoDialog: true
        });
    }

    addToWishList() {
        this.setState({
            dialogTitle: 'Added to wish list',
            dialogMessage: 'Please check your wish list for newly added item.',
            showInfoDialog: true
        });
    }

    render() {
        const { searchIcon, cartWhiteIcon, backIcon, heartEmptyIcon, product, showInfoDialog, dialogMessage, dialogTitle } = this.state;

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

                <ScrollView>
                    <View style={styles.productMainInfoArea}>
                        <View style={styles.productMainInfoArea__imageContainer}>
                            <Image
                                style={styles.productMainInfoArea__image}
                                source={{ uri: 'http:' + product.picture }}
                            />
                            {/* <SliderBox
                            ImageComponent={FastImage}
                            images={product.picture}
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
                        /> */}
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
                            {product.colorOptions.map(function (option) {
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
                        <TouchableHighlight style={styles.actionButtonArea__button} onPress={() => this.addToWishList()}>
                            <View style={styles.actionButtonArea__button__wishList}>
                                <View style={styles.actionButtonArea__button__wishListIcon}>
                                    <SvgUri source={heartEmptyIcon} width="25" height="25"
                                    />
                                </View>
                                <Text style={styles.actionButtonArea__button__wishListLabel}>WishList</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.actionButtonArea__button} onPress={() => this.addToCart()}>
                            <View style={styles.actionButtonArea__button__addToCart}>
                                <Text style={styles.actionButtonArea__button__addToCartlabel}>Add To Cart</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>

                <Dialog
                        onDismiss={() => {
                            this.setState({ showInfoDialog: false });
                        }}
                        width={0.85}
                        visible={showInfoDialog}
                        rounded
                        actionsBordered
                        dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                        dialogTitle={
                            <DialogTitle
                                title={dialogTitle}
                                textStyle={{
                                    fontSize: 17,
                                }}
                                style={{
                                    backgroundColor: '#ffffff',
                                }}
                                hasTitleBar={false}
                                align="center" />
                        }
                        footer={
                            <DialogFooter>
                                <DialogButton
                                    text="Ok"
                                    textStyle={{
                                        fontSize: 15,
                                    }}
                                    bordered
                                    onPress={() => {
                                        this.setState({ showInfoDialog: false });
                                    }}
                                    key="button-2" />
                            </DialogFooter>
                        }>
                        <DialogContent
                            style={{
                                backgroundColor: '#ffffff',
                                justifyContent: 'center', alignItems: 'center',
                            }}>
                            <Text>{dialogMessage}</Text>
                        </DialogContent>
                    </Dialog>
            </View>
        );
    }
}

export default ProductDetailsPageComponent;