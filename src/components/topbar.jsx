import React, { Component } from 'react';
import {Link} from 'react-router';
// css
import styles from 'css/components/topbar.css';

class TopBarComponent extends Component {

    showNProgress () {
        window.NProgress.start();
    }

    renderLogin () {
        return (
            <div className={styles['topbar-inner']}>
                <a href="javascript:;" className='font-color hover-theme-color'>绑定微信</a>
                <span> &nbsp; </span>|<span> &nbsp; </span>
                <a href="javascript:;" className='font-color hover-theme-color'>个人中心</a>
                <span> &nbsp; </span>|<span> &nbsp; </span>
                <span>您好</span>，
                <a href="javascript:;" className='theme-color hover-theme-color'>13564030785@163.com</a>
                <span> &nbsp; </span>|<span> &nbsp; </span>
                <a href="javascript:;" className='font-color hover-theme-color'>
                    信息<span> &nbsp; </span>
                    <span className={styles.radius + " theme-bg-color"}>0</span>
                </a>
                <span> &nbsp; &nbsp; &nbsp; &nbsp; </span>
                <a href="javascript:;" className='font-color hover-theme-color'>注销</a>
            </div>
        );
    }

    renderNotLogin() {
        const {location} = this.props,
        {pathname} = location;
        return (
            <div className={styles['topbar-inner']}>
                <a href="javascript:;" className='font-color hover-theme-color'>微信授权登录</a>
                <span> &nbsp; </span>|<span> &nbsp; </span>
                <Link 
                    className='font-color hover-theme-color' 
                    to="/login"
                    onClick={pathname.indexOf('login') !== -1 ? () => {} : this.showNProgress}
                >
                    登录
                </Link>
                <span> &nbsp; </span>|<span> &nbsp; </span>
                <Link 
                    className='font-color hover-theme-color' 
                    to="/register"
                    onClick={pathname.indexOf('register') !== -1 ? () => {} : this.showNProgress}
                >
                    注册
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className={styles.topbar+' topbar-bg-color'}>
                {this.renderNotLogin()}
            </div>
        );
    }
}

export default TopBarComponent;