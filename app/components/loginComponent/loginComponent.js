
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    Animated,
    AsyncStorage,
    Vibration,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
// import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
} from 'react-native-popup-dialog';
import * as Animatable from 'react-native-animatable';
import Reactotron from 'reactotron-react-native';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogTitle: '',
            dialogMessage: '',
            emailAddress: '',
            password: '',
            showInfoDialog: false,
            fadeAnim: new Animated.Value(1),
        };

        this.shakeAnimation = new Animated.Value(0);

        this.inputEmailAddress = this.inputEmailAddress.bind(this);
        this.signIn = this.signIn.bind(this);
        this.storeData = this.storeData.bind(this);
        this.getData = this.getData.bind(this);

        NetInfo.addEventListener((connectionInfo) => {
            this.storeData('connectionInfo', connectionInfo);
            this.storeData('userName', this.state.emailAddress);
            this.storeData('loginState', 'sucess');
        });
    }

    startShake = () => {
        Animated.sequence([
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
     }

    inputEmailAddress(text) {
        this.setState({
            emailAddress: text
        })
    }

    inputPassword(text) {
        this.setState({
            password: text
        })
    }

    signIn() {
        this.getUserInfo();
    }
    
    storeData(key, value) {
        try {
            AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
            Reactotron.log('storeData error', e);
        }
    }

    getData(key) {
        try {
            const value = AsyncStorage.getItem(key)
            if (value !== null) {
                return value;
            }
        } catch (e) {
            // error reading value
            Reactotron.log('getData error', e);
        }
    }

    getUserInfo() {
        let formdata = new FormData();
        formdata.append('email', this.state.emailAddress);
        formdata.append('password', this.state.password);
        var obj = {
            method: 'POST',
            body: formdata
        }

        NetInfo.fetch().then(connection => {
            if (!connection.isConnected) {
                this.setState({
                    dialogTitle: 'Network issue',
                    dialogMessage: 'Please check your network connection.',
                    showInfoDialog: true
                });
                Vibration.vibrate()
            } else {
                fetch('http://34.73.95.65/index.php?rt=a/account/login', obj)
                    .then((response) => response.json())
                    .then((response) => {
                        this.setState({
                            isLoading: false,
                            dataSource: response,
                        }, function () {
                            if (response.status == 1 && response.success) {
                                Reactotron.log('NetInfo', NetInfo);
                                this.props.navigation.navigate('MainPageScreen');
                            } else {
                                this.storeData('loginState', 'fail');
                                this.setState({
                                    dialogTitle: 'Login Failed',
                                    dialogMessage: 'Please check your email address and password.',
                                    showInfoDialog: true
                                });
                                Vibration.vibrate();
                                this.startShake();
                                Animated.timing(
                                    this.state.fadeAnim,
                                    {
                                        toValue: 0,
                                        duration: 3000,
                                    }
                                );
                            }
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            }
        });

    }

    render() {
        const { emailAddress, password, showInfoDialog, fadeAnim, dialogMessage, dialogTitle } = this.state;

        return (
            <View style={styles.background}>
                <LinearGradient colors={['#C4DDEA', '#EBCDD6', '#F5EBC6']}>
                    <View style={styles.titleArea}>
                        <Text style={styles.titleArea__title}>Ecommerce</Text>
                        <Text style={styles.titleArea__title}>Store</Text>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.inputArea__inputField}
                            placeholder={'Email Address'}
                            onChangeText={text => this.inputEmailAddress(text)}
                            defaultValue={emailAddress}>
                        </TextInput>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.inputArea__inputField}
                            placeholder={'Password'}
                            onChangeText={text => this.inputPassword(text)}
                            defaultValue={password}
                        ></TextInput>
                    </View>

                    <View style={styles.signInArea}>
                        <View style={styles.signInArea__forgotPassword}>
                            <Text style={styles.link}>Forgot Password?</Text>
                        </View>
                        <Animatable.View style={{ transform: [{translateX: this.shakeAnimation}] }}>
                            <Button
                                style={styles.signInArea__signIn__Button}
                                onPress={() => this.signIn()}
                                title='SIGN IN'
                                color='#158CBF'
                            />
                        </Animatable.View>
                        <View style={styles.signInArea__signUp}>
                            <Text
                                style={styles.link}
                                onPress={() => this.props.navigation.navigate('RegisterScreen')}
                            >New here? Sign Up</Text>
                        </View>
                    </View>

                    <View style={styles.bottom}>
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
                </LinearGradient>
            </View>
        );
    }
}

export default LoginComponent;