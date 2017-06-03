import React, { Component } from 'react';
import {Link} from 'react-router';
import BasicPage from './basic-page';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FooterComponents from 'components/footer';
//css
import styles from 'css/pages/login.css';

class LoginPage  extends BasicPage {

    componentDidMount() {
        this.hideNProgress();
    }

    render() {
        return (
            <div>
                <div className={styles.desc}>
                    <div className={styles.container}>
                        <div className={styles.block}>
                            <strong>会员登录</strong>
                            <div className={styles.form}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <label htmlFor="zhanghao">帐 &nbsp; 号</label>
                                            </th>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name="zhanghao" 
                                                    id="zhanghao" 
                                                    className="input_text" 
                                                    placeholder="请输入注册邮箱" 
                                                    value="" 
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label htmlFor="mima">密 &nbsp; 码</label>
                                            </th>
                                            <td>
                                                <input 
                                                    type="password" 
                                                    name="mima" 
                                                    id="mima" 
                                                    className="input_text" 
                                                    placeholder="请输入密码" 
                                                    value="" 
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label htmlFor="yanzhengma">验证码</label>
                                            </th>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name="yanzhengma" 
                                                    id="yanzhengma" 
                                                    className="input_text" 
                                                    placeholder="请输入验证码" 
                                                    style={{
                                                        width: 150
                                                    }}
                                                />
                                                <span id="shuaxin">
                                                    <img 
                                                        id="randstr" 
                                                        src="http://www.fenkuailai.com/attached/captcha/1496487823.4398.jpg" 
                                                        style={{
                                                            width: 80, height: 36, border: 0,float:'right'
                                                        }} 
                                                        alt=" " 
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox inline>
                                                    记住密码
                                                </Checkbox>
                                            </td>
                                            <td style={{
                                                textAlign:'right'
                                            }}>
                                                <a 
                                                    href="javascript:;" 
                                                    className="hover-theme-color font-color"
                                                >忘记密码?</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <button>登录</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" style={{padding:0}}>还不是会员？
                                                <Link 
                                                    to="register" 
                                                    className="theme-color hover-theme-color"
                                                    onClick={this.showNProgress}
                                                >
                                                    免费注册
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponents />
            </div>
        );
    }
}

export default LoginPage;