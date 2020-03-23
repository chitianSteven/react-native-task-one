import { combineReducers, createStore } from 'redux';
import CounterReducer from './counterReducer';

const AppReducers = combineReducers({
    CounterReducer
})

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(
    rootReducer
); // Creating a store with given configuration

export default store;