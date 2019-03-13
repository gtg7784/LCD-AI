import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './Main.scss';
import logo from '../../assets/logo.png'

const cx = classNames.bind(styles);

export default class Main extends React.Component {
    render() {
        return (
            <div className={cx('Main')}>
            </div>
        );
    }
}
