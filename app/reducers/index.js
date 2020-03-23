import { combineReducers, createStore } from 'redux';
// import { reactotron } from '../config/reactotron';
import counterReducer from './countReducer';

// const middlewares = [];
// // Initialising a middlewares array, later on you can add a
// // saga middleware for example
// if (__DEV__) { // Check if it's development mode
//   const reactotronMiddleware = reactotron.createEnhancer();
//   // Creating Reactotron "data capturer"
//   middlewares.push(reactotronMiddleware);
//   // And pushing it to the middlewares array
// }

const AppReducers = combineReducers({
    counterReducer
})

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(
    rootReducer,
    // compose(...middlewares)
); // Creating a store with given configuration

export default store;