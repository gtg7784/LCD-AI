import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import * as classNames from 'classnames/bind';
import styles from './App.scss';

import Login from './0.Login/Login';
import Join from './2.Join/Join';
import Home from "./1.Home/Home";

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        if (window.location.pathname === '/login') {
            return <Login />;
        } else if(window.location.pathname === '/join') {
            return <Join />;
        } else if(window.location.pathname === '/use'){
           return <Home/>;
        }else{
            return (
                <div className={cx("App")} />
            );
        }

    }
}

export default hot(module)(App);