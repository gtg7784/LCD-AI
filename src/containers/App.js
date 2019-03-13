import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom'
import * as classNames from 'classnames/bind';
import styles from './App.scss';

import Login from './Login/Login';
import Join from './Join/Join';
import Upload from "./Upload/Upload";
import Main from './Main/Main'

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        return(
            <div className="App1">
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/join' exact component={Join} />
                    <Route path='/upload' exact component={Upload} />
                    <Route exact component={Main}/>
                </Switch>
            </div>
        )

    }
}

export default App;