/**
 * @format
 */
if(__DEV__) {
    import('./reactotron.config').then(() => console.log('Reactotron Configured'))
  }
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import store from './src/store.js';
// import { addToCart }  from './src/actions/cart-actions';

// console.log("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));

// unsubscribe();