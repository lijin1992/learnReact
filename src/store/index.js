import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import count from './count.redux'
import user from './user.redux'
export default createStore(
    combineReducers({count,user}),
    applyMiddleware(thunk)
    );