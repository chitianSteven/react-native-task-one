import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
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

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        const prefixForAssets = '../../assets/';
        this.state = {
            showInfoDialog: false,
            fHeight : 0,
            page: 1,
            categorySource: {},
            curCategoryId: 0,
            loading: false,
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
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.emptyComponent = this.emptyComponent.bind(this);
    }

    componentWillMount() {
        this.getAllCategories();
    }

    inputSearch(keyword) {
        this.getProductsInfo(keyword);
    }

    onRefresh() {
        this.setState({
            refreshing: true,
        },  () => {
            this.getProductsInfo();
        });
    }
    
    handleLoadMore() {
        if (!this.state.loading) {
            this.getProductsInfo(this.state.search, true);
        }
    };

    renderFooter() {
        if (!this.state.loading) return null;
        return (
            <ActivityIndicator
                style={{ color: '#000' }}
            />
        );
    };

    emptyComponent() {
        return <View style={{
            height: this.state.fHeight,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 16
            }}>Loading...</Text>
        </View>
    }

    selectCategory(categoryId) {
        this.setState({
            curCategoryId: categoryId
        });
        this.getProductsInfo();
    }

    getProductsInfo(keyword, add) {
        let productions = [];
        let params;
        let page = this.state.page;

        if (!this.state.categorySource || !this.state.categorySource.subcategories) {
            return 
        }
        this.setState({ loading: true, refreshing: true })
        
        if (add && this.state.products[0].productions) {
            productions = this.state.products[0].productions;
            page += 1;
            this.setState({
                page: page
            })
        } else {
            this.setState({
                page: 1
            })
        }

        if (keyword) {
            params = "rt=a/product/filter&keyword="+keyword+"&page="+ page +"&rows=10&sidx=name&sort=ACS";
        } else {
            params = "rt=a/product/filter&category_id=" + this.state.curCategoryId;
        }

        fetch('http://34.73.95.65/index.php?' + params)
        .then((response) => response.json())
        .then((response) => {
            if (response.rows) {
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
                        description: item.cell.description,
                    })
                })
                const curCategory = this.state.categoryList.filter(category => category.category_id === this.state.curCategoryId);
                
                this.setState({
                    loading: false,
                    refreshing: false,
                    products: [{
                        subCategoryName: curCategory[0].name,
                        productions: productions,
                    }]
                })
            } else {
                this.setState({
                    showInfoDialog: true
                })
            }
        })
        .catch((error) => {
            this.setState({
                loading: false,
                refreshing: false,
            })
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
        this.setState({
            loading: true,
            refreshing: true,
        })
        fetch('http://34.73.95.65/index.php?rt=a/product/category&category_id=0')
            .then((response) => response.json())
            .then((response) => {
                let curCategoryId = this.state.curCategoryId === 0?response.subcategories[0].category_id:this.state.curCategoryId;
                this.setState({
                    categorySource: response,
                    curCategoryId: curCategoryId,
                    loading: false,
                    refreshing: false,
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
                    name: transfromEscapeCharacter.esc2string(item.name),
                    picture: item.thumb,
                    category_id: item.category_id,
                })
            })
        }

        this.setState({
            categoryList: categoryList,
        })
    }

    getProductDetails(item) {
        this.props.navigation.push('ProductDetailsPageScreen', item);
    }

    openDrawerScreen() {
        this.props.navigation.toggleDrawer();
    }

    render() {
        const { search, categoryList, products, refreshing, showInfoDialog } = this.state;

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
                            onChangeText={(text) => {
                                this.setState({
                                    search: text
                                })
                                this.inputSearch(text)
                            }}
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

                <View 
                    style={styles.productionList}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }>
                    <FlatList
                        style={styles.productionList__content}
                        data={products}
                        horizontal={false}
                        keyExtractor={(item, index) => index}
                        numColumns={1}
                        ListFooterComponent={this.renderFooter}
                        onEndReachedThreshold={0.01}
                        onEndReached={this.handleLoadMore}
                        ListEmptyComponent={this.emptyComponent}
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
                                            <TouchableHighlight style={styles.productionList__content__item} onPress={() => this.getProductDetails(item)}>
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
                </View>

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
                                title="Sorry"
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
                            <Text>Could not find the match productions.</Text>
                        </DialogContent>
                    </Dialog>
            </View>
        );
    }
}

export default RegisterComponent;