
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
} from 'react-native-popup-dialog';
import Reactotron from 'reactotron-react-native';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            showInfoDialog: false,
        };

        this.inputEmailAddress = this.inputEmailAddress.bind(this);
        this.signIn = this.signIn.bind(this);
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

    getUserInfo() {
        let formdata = new FormData();
        formdata.append('email', this.state.emailAddress);
        formdata.append('password', this.state.password);
        var obj = {
            method: 'POST',
            body: formdata
        }
        fetch('http://34.73.95.65/index.php?rt=a/account/login', obj)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    isLoading: false,
                    dataSource: response,
                }, function () {
                    if (response.status == 1 && response.success) {
                        this.props.navigation.navigate('MainPageScreen');
                    } else {
                        this.setState({ showInfoDialog: true });
                    }
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { emailAddress, password, showInfoDialog } = this.state;

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
                        <View style={styles.signInArea__signIn}>
                            <Button
                                style={styles.signInArea__signIn__Button}
                                onPress={() => this.signIn()}
                                title='SIGN IN'
                                color='#158CBF'
                            />
                        </View>
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
                                title="Login Failed"
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
                            <Text>Please check your email address and password.</Text>
                        </DialogContent>
                    </Dialog>
                </LinearGradient>
            </View>
        );
    }
}

export default LoginComponent;