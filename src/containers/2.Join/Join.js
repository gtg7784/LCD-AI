import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './Join.scss';
import logo from '../logo.png'

const cx = classNames.bind(styles);

export default class Join extends React.Component {
    render() {
        return (
            <div className={cx('Join')}>
                <div/>
                <header className={cx("loginHeader")}>
                    <form>
                        <img src={logo} alt="logo"/> <br/>
                        <p>
                            <div>
                                <span>이름</span>
                                <input type="text"/>
                                <span>생년월일</span>
                                <input type="date"/>
                                <span>소속병원</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>이메일 아이디</span>
                                <input type="email"/>
                                <span>비밀번호</span>
                                <input type="password"/>
                                <span>비밀번호 확인</span>
                                <input type="password"/>
                            </div>
                        </p>
                        <Link to='login'><button>가입하기</button></Link>
                    </form>
                </header>
            </div>
        );
    }
}
