import React, { Component } from 'react';
import {Link} from 'react-router';
import BasicPage from './basic-page';
import FooterComponents from 'components/footer';
//css
import styles from 'css/pages/register.css';

class RegisterPage extends BasicPage {

    componentDidMount() {
        this.hideNProgress();
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <br/>
                    <div className={styles.solid}>
                        <div className={styles['column-name']}>
                            用户注册
                        </div>
                        <div className={styles.login + " pull-right"}>
                            <p>已是会员？立即登录</p>
                            <Link to="login" onClick={this.showNProgress}>登录</Link>
                        </div>
                        <div className={styles.form + " pull-left"}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>账 &nbsp; 号</th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="zhanghao" 
                                                value="" 
                                                id="zhanghao" 
                                                placeholder="请输入注册邮箱" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>密 &nbsp; 码</th>
                                        <td>
                                            <input 
                                                type="password" 
                                                name="mima" 
                                                id="mima" 
                                                placeholder="请输入密码" 
                                                value="" 
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>验证码</th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="yanzhengma" 
                                                id="yanzhengma" 
                                                placeholder="请输入验证码"
                                                style={{
                                                    width: 150,
                                                    marginRight: 10
                                                }}
                                            />
                                            <span id="shuaxin">
                                                <img id="randstr" 
                                                    src="http://www.fenkuailai.com/attached/captcha/1496494116.75.jpg" 
                                                    style={{
                                                        width: 80, height: 36, border: 0
                                                    }} 
                                                    alt=" "
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <td>
                                            <button>注册</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <em style={{
                                marginLeft:160,color:'#c5c5c5'
                            }}>
                                <img src={process.env.PUBLIC_URL+'/images/home/help.png'} alt="img" /> 
                                请填写真实有效的用户信息，无效的用户信息将影响您的提现申请。
                            </em>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <FooterComponents />
            </div>
        );
    }
}

export default RegisterPage;