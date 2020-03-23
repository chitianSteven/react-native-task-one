import { connect } from 'react-redux';

import * as Actions from './actionTypes';
import CounterComponent from '../components/counterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(counterIncrement),
    decrement: () => dispatch(counterDecrement),    
});

export const counterIncrement = () => ({
    type: Actions.COUNTER_INCREMENT,
})

export const counterDecrement = () => ({
    type: Actions.COUNTER_DECREMENT,
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)