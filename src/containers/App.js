import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom'
import * as classNames from 'classnames/bind';
import styles from './App.scss';

import Login from './0.Login/Login';
import Join from './2.Join/Join';
import Home from "./1.Home/Home";

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        return(
            <div className="App1">
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/join' exact component={Join} />
                    <Route path='/' exact component={Home} />
                </Switch>
            </div>
        )

    }
}

export default App;