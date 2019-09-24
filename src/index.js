import React  from 'react';
import reactDom from "react-dom";
import store from './store'
import RouterSample from './components/RouterSample'
import {Provider} from 'react-redux'
// reactDom.render((
// <Provider store={store}>
//     <UserStore/>
// </Provider>
// ), document.querySelector('#root'))

reactDom.render(<RouterSample></RouterSample>,document.querySelector('#root'))
