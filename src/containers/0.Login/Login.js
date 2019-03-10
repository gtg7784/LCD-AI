import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './Login.scss';
import logo from '../../assets/logo.png';
const cx = classNames.bind(styles);

export default class Login extends React.Component {
    render() {
        return (
            <div className={cx('Login')}>
                <div/>
                <header className={cx("loginHeader")}>
                    <form>
                        <img src={logo} alt="logo"/> <br/>
                        <input type="text" id="id" placeholder="아이디"/> <br/>
                        <input type="password" id="pw" placeholder="비밀번호"/> <br/>
                        <Link to="/use"><button type="submit">로그인</button></Link>
                        <p>앗! 아직 회원이 아니신가요? <Link to="/join"><span>회원가입</span></Link></p>
                    </form>
                </header>
            </div>
        );
    }
}
