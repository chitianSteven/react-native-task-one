import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';
import Reactotron from 'reactotron-react-native'

const escapeHtml = [
    {
        html: "&amp;",
        string: "&",
    }
]

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        this.state = {
            categorySource: {},
            curCategoryId: 0,
            refreshing: false,
            search: '',
            searchIcon: require(prefixForAssets + 'search.svg'),
            cartWhiteIcon: require(prefixForAssets + 'cart-white.svg'),
            menuIcon: require(prefixForAssets + 'menu.svg'),
            categoryList: [],
            products: []
        };

        this.inputSearch = this.inputSearch.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.getProductsInfo = this.getProductsInfo.bind(this);
        this.getPriceWithCurrency = this.getPriceWithCurrency.bind(this);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.filterCategorySource = this.filterCategorySource.bind(this);
        this.getProductDetails = this.getProductDetails.bind(this);
        this.openDrawerScreen = this.openDrawerScreen.bind(this);
        this.htmlUnescape = this.htmlUnescape.bind(this);
        this.getAllCategories();
    }

    inputSearch() {

    }

    onRefresh() {
        this.setState({
            refreshing: true,
        },  () => {
            this.getProductsInfo();
        });
    }

    selectCategory(categoryId) {
        this.setState({
            curCategoryId: categoryId
        });
        this.getProductsInfo();
    }

    getProductsInfo() {
        let productions = [];

        if (!this.state.categorySource || !this.state.categorySource.subcategories) {
            return 
        }

        fetch('http://34.73.95.65/index.php?rt=a/product/filter&category_id=' + this.state.curCategoryId)
        .then((response) => response.json())
        .then((response) => {
            response.rows.map((item)=> {
                let prePrice = '';
                if (item.cell.rating) {
                    prePrice = parseInt(item.cell.price) - parseInt(item.cell.price) * parseInt(item.cell.rating)/100;
                }
                productions.push({
                    productName: item.cell.name,
                    picture: item.cell.thumb,
                    curPrice: this.getPriceWithCurrency(item.cell.price, item.cell.currency_code),
                    prePrice: this.getPriceWithCurrency(prePrice, item.cell.currency_code),
                    discount: item.cell.rating?item.cell.rating+"% Off":null,
                })
            })
            const curCategory = this.state.categoryList.filter(category => category.category_id === this.state.curCategoryId);
            
            this.setState({
                products: [{
                    subCategoryName: curCategory[0].name,
                    productions: productions,
                }]
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    getPriceWithCurrency(value, currency) {
        if (!value) return 
        switch(currency) {
            case "USD":
                return "$ " +  value
        }
    }

    getAllCategories() {
        fetch('http://34.73.95.65/index.php?rt=a/product/category&category_id=0')
            .then((response) => response.json())
            .then((response) => {
                let curCategoryId = this.state.curCategoryId === 0?response.subcategories[0].category_id:this.state.curCategoryId;
                this.setState({
                    categorySource: response,
                    curCategoryId: curCategoryId,
                });
                this.filterCategorySource();
                this.getProductsInfo();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    

    filterCategorySource() {
        let categoryList = [];

        if (this.state && this.state.categorySource && this.state.categorySource.subcategories) {
            this.state.categorySource.subcategories.map((item) => {                
                categoryList.push({
                    name: this.htmlUnescape(item.name),
                    picture: item.thumb,
                    category_id: item.category_id,
                })
            })
        }

        this.setState({
            categoryList: categoryList,
        })
    }

    getProductDetails() {
        this.props.navigation.navigate('ProductDetailsPageScreen');
    }

    openDrawerScreen() {
        this.props.navigation.toggleDrawer();
    }

    htmlUnescape(text) {
        escapeHtml.map((item)=> {
            if (text.indexOf(item.html)) {
                text = text.replace(item.html, item.string);
            }
        })

        return text;
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
                    <SvgUri source={this.state.cartWhiteIcon} width="30" height="30"
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
                    <FlatList
                        data={categoryList}
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index, separators}) => (
                            <TouchableHighlight
                              onPress={() => this.selectCategory(item.category_id)}>
                                <View style={styles.categoryList__item}>
                                    <View style={styles.categoryList__item__imageContainer}>
                                        <Image
                                            source={{ uri: 'http:' + item.picture }}
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </View>
                                    <Text style={styles.categoryList__item__name}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                          )}
                    />
                </View>

                <ScrollView style={styles.productionList}>
                    <FlatList
                        style={styles.productionList__content}
                        data={products}
                        horizontal={false}
                        keyExtractor={(item, index) => index}
                        numColumns={1}
                        onRefresh={this.onRefresh}
                        refreshing={this.state.refreshing}
                        renderItem={({ item, index, separators }) => (
                            <View>
                                <View style={styles.productionList__headerBar}>
                                    <Text style={styles.productionList__headerBar__title}>{item.subCategoryName}</Text>
                                    <TouchableHighlight style={styles.productionList__headerBar__button}>
                                        <Text style={styles.productionList__headerBar__button__label}>View All</Text>
                                    </TouchableHighlight >
                                </View>

                                <View style={styles.productionList__content}>
                                    <FlatList
                                        style={styles.productionList__content}
                                        data={item.productions}
                                        keyExtractor={(item, index) => index}
                                        numColumns={2}
                                        renderItem={({ item, index, separators }) => (
                                            <TouchableHighlight style={styles.productionList__content__item} onPress={() => this.getProductDetails()}>
                                                <View>
                                                    <View style={styles.productionList__content__item__imageContainer}>
                                                        <Image
                                                            style={styles.productionList__content__item__image}
                                                            source={{ uri: 'http:' + item.picture }}
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
                                        )}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default RegisterComponent;