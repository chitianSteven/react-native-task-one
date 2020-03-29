
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Reactotron from 'reactotron-react-native'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: ''
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

    }

    getUserInfo() {
        Reactotron.log('fetch')
        fetch('http://34.73.95.65/index.php?rt=a/account/login&loginname=stevenChitian&password=123456789',
            {
                method: 'POST'
            })
            .then((responseJson) => {
                Reactotron.log('get')
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    Reactotron.log('function')
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { emailAddress, password } = this.state;

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
                            onPress={()=> this.props.navigation.navigate('RegisterScreen')}
                            >New here? Sign Up</Text>
                        </View>
                    </View>

                    <View style={styles.bottom}>
                        <Text>{emailAddress}</Text>
                        <Text>{password}</Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default LoginComponent;