import React  from 'react';
import reactDom from "react-dom";
import RouterSample from './components/RouterSample'

// reactDom.render((
// <Provider store={store}>
//     <UserStore/>
// </Provider>
// ), document.querySelector('#root'))

reactDom.render(<RouterSample></RouterSample>,document.querySelector('#root'))
