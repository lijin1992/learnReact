import React  from 'react';
import reactDom from "react-dom";
import Hoc from './Hoc'
reactDom.render(<Hoc title='原本的title'/>, document.querySelector('#root'))