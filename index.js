import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
if (__DEV__) {
    import('./app/config/reactotron').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent(appName, () => App);
