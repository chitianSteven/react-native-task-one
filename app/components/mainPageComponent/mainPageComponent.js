
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';
import {createDrawerNavigator} from 'react-navigation';
import Reactotron from 'reactotron-react-native'

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        this.state = {
            search: '',
            searchIcon: require(prefixForAssets + 'search.svg'),
            cartIcon: require(prefixForAssets + 'cart.svg'),
            menuIcon: require(prefixForAssets + 'menu.svg'),
            categoryList: [
                {
                    name: 'Electronics',
                    picture: require(prefixForAssets + 'electronics.png')
                }, {
                    name: 'CLOTH',
                    picture: require(prefixForAssets +'cloth.jpeg')
                }, {
                    name: 'FURNITURES',
                    picture: require(prefixForAssets +'furnitures.jpg')
                }],
            products: [
                {
                    categoryName: 'Electronics',
                    productions: [
                        {
                            productName: 'Xiaomi Mi A3',
                            picture: require(prefixForAssets +'xiaomiMiA3.jpg'),
                            curPrice: '$ 222',
                            prePrice: '$ 224',
                            discount: '9% Off'
                        },
                        {
                            productName: 'OPPO K3',
                            picture: require(prefixForAssets +'oppoK3.jpg'),
                            curPrice: '$ 150',
                            prePrice: '$ 200',
                            discount: '25% Off'
                        },
                        {
                            productName: 'iPhone XR',
                            picture: require(prefixForAssets +'iphoneXR.jpg'),
                            curPrice: '$ 849',
                            prePrice: '$ 749',
                            discount: ' '
                        }
                    ]
                }
            ]
        };

        this.inputSearch = this.inputSearch.bind(this);
        this.getProductDetails = this.getProductDetails.bind(this);
        this.openDrawerScreen = this.openDrawerScreen.bind(this);
    }

    inputSearch() {

    }

    getProductDetails() {
        this.props.navigation.navigate('ProductDetailsPageScreen');
    }

    openDrawerScreen() {
        this.props.navigation.toggleDrawer();
    }

    render() {
        const { search, categoryList, products } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.headerBar}>
                    <TouchableHighlight onPress={() => this.openDrawerScreen()}>
                        <SvgUri source={this.state.menuIcon} width="30" height="30"
                    />
                    </TouchableHighlight>
                    <Text  style={styles.headerBar__title}>Ecommerce Store</Text>
                    <SvgUri source={this.state.cartIcon} width="30" height="30"
                    />
                </View>
                
                <View style={styles.searchBoxArea}>
                    <View style={styles.searchBoxArea__container}>
                        <View style={styles.searchBoxArea__container__searchIcon}>
                            <SvgUri source={this.state.searchIcon} width="30" height="30"
                            />
                        </View>
                        <TextInput style={styles.searchBoxArea__container__inputField}
                            placeholder={'Search for products...'}
                            onChangeText={text => this.inputSearch(text)}
                            defaultValue={search}>
                            </TextInput>
                    </View>
                </View>

                <View style={styles.categoryList}>
                    {categoryList.map(function (item) {
                        return (
                            <View style={styles.categoryList__item}>
                                <View style={styles.categoryList__item__imageContainer}>
                                    <Image
                                        style={styles.categoryList__item__image}
                                        source={item.picture}
                                    />
                                </View>
                                <Text style={styles.categoryList__item__name}>{item.name}</Text>
                            </View>
                        )
                    })
                    }
                </View>

                <View style={styles.productionList}>
                    <View style={styles.productionList__headerBar}>
                        <Text style={styles.productionList__headerBar__title}>Electronics</Text>
                        <TouchableHighlight style={styles.productionList__headerBar__button}>
                            <Text style={styles.productionList__headerBar__button__label}>View All</Text>
                        </TouchableHighlight >
                    </View>

                    <View style={styles.productionList__content}>
                        {products[0].productions.map((item) => {
                            return (
                                <TouchableHighlight style={styles.productionList__content__item} onPress={() => this.getProductDetails()}>
                                    <View>
                                        <View style={styles.productionList__content__item__imageContainer}>
                                            <Image
                                                style={styles.productionList__content__item__image}
                                                source={item.picture}
                                            />
                                        </View>
                                        <Text style={styles.productionList__content__item__name}>{item.productName}</Text>
                                        <View style={styles.productionList__content__item__price}>
                                            <Text style={styles.productionList__content__item__price__curPrice}>{item.curPrice}</Text>
                                            <Text style={styles.productionList__content__item__price__prePrice}>{item.prePrice}</Text>
                                            <Text style={styles.productionList__content__item__price__discount}>{item.discount}</Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                        }
                    </View>
                </View>
            </View>
        );
    }
}

export default RegisterComponent;