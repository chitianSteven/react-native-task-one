
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
} from 'react-native';
// import Svg from '../svgComponent/svgComponent';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Reactotron from 'reactotron-react-native'

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        };

        this.inputFullName = this.inputFullName.bind(this);
        this.inputEmailAddress = this.inputEmailAddress.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.inputConfirmPassword = this.inputConfirmPassword.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    inputFullName(text) {
        this.setState({
            fullName: text
        })
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
    
    inputConfirmPassword(text) {
        this.setState({
            confirmPassword: text
        })
    }

    signUp() {

    }

    render() {
        const { fullName, emailAddress, password, confirmPassword } = this.state;

        return (
            <View style={styles.background}>
                <LinearGradient colors={['#C4DDEA', '#EBCDD6', '#F5EBC6']}>
                    <View style={styles.navigationArea} onStartShouldSetResponder={()=> this.props.navigation.navigate('LoginScreen')}>
                        <SvgUri source={require('../../assets/backArrow.svg')}width="40" height="40"
                        />
                    </View>

                    <View style={styles.titleArea}>
                        <Text style={styles.titleArea__title}>Ecommerce</Text>
                        <Text style={styles.titleArea__title}>Store</Text>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.inputArea__inputField}
                            placeholder={'Full Name'}
                            onChangeText={text => this.inputFullName(text)}
                            defaultValue={fullName}>
                        </TextInput>
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
                        <TextInput
                            style={styles.inputArea__inputField}
                            placeholder={'Comfirm Password'}
                            onChangeText={text => this.inputConfirmPassword(text)}
                            defaultValue={confirmPassword}>
                        </TextInput>
                    </View>

                    <View style={styles.signUpArea}>
                        <Button
                            style={styles.signUpArea__Button}
                            onPress={() => this.signUp()}
                            title='SIGN UP'
                            color='#158CBF'
                        />
                    </View>
                    
                    <View style={styles.signInArea}>
                        <Text 
                        style={styles.link}
                        onPress={()=> this.props.navigation.navigate('LoginScreen')}
                        >Already have account? Sign in</Text>
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

export default RegisterComponent;