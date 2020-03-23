import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './reducers/index';
import CounterAction from './actions/counterAction';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterAction />
            </Provider>
        )
    }
}