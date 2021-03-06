import * as React from 'react';

import * as classNames from 'classnames/bind';
import styles from './Upload.scss';
import {Link} from "react-router-dom";
import drag from '../../assets/drag.png';
import logo from '../../assets/logo.png';
const cx = classNames.bind(styles);

export default class Home extends React.Component {
    render() {
        return (
            <div className={cx('Home')}>
                <div/>
                <header className={cx("loginHeader")}>
                    <nav>
                        <img src={logo} alt="logo"/>
                        <ul>
                            <li><Link to='/edit'>회원정보 수정</Link></li>
                            <div/>
                            <li><Link to='/login'>로그아웃</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <img src={drag} alt=""/> <br/>
                        <Link to="/">
                            <input type="file" accept=".jpg, .png, .dcm, .dicom" />
                            <label htmlFor="">파일 선택하기</label>
                        </Link>
                    </div>
                    <div>
                        파일 업로드시 본 약관을 동의하는 것으로 간주합니다. <span><Link to='/term'>(약관 바로가기)</Link></span>
                    </div>
                </header>
            </div>
        );
    }
}