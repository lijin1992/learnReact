import React  from 'react';
import reactDom from "react-dom";
import store from './store'
import UserStore from './UserStore'
import {Provider} from 'react-redux'
reactDom.render((
<Provider store={store}>
    <UserStore/>
</Provider>
), document.querySelector('#root'))
