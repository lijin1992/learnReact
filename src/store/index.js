import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import count from './count.redux'
export default createStore(
    combineReducers({count}),
    applyMiddleware(thunk)
    );