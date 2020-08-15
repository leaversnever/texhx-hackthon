import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router} from '@reach/router';
import Mainpage from "./Components/MainPage/Mainpage";
import Storage from "./Components/Storage/Storage";
import Mine from "./Components/Mine/Mine";
import Health from "./Components/Health/Health"

ReactDOM.render(
    <Router>
        <Mainpage path="/" />
        <Storage path="storage" />
        <Mine path="mine" />
        <Health path="health" />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
