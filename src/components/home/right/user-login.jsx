import React, { Component } from 'react';

import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

//css
import styles from 'css/pages/home.css';

class UserLoginComponent  extends Component {

    handleClick = e => {

    }

    render() {
        return (
            <div>
                <div className={styles['column_name']}>
                    会员登录
                </div>
                <ul className={styles['profile-form']}>
                    <li>
                        <FormControl 
                            type="text"
                            placeholder="请输入注册邮箱"
                        />
                    </li>
                    <li>
                        <FormControl 
                            type="password"
                            placeholder="请输入密码"
                        />
                    </li>
                    <li>
                        <FormControl 
                            type="text"
                            className={styles['verify-code']}
                            placeholder="请输入验证码"
                        />
                        <span className={styles.refresh}>
                            <img 
                                src={process.env.PUBLIC_URL+'/images/verify.jpg'} 
                                alt="验证码"
                                style={{
                                    verticalAlign: 'middle',
                                    width: 80,
                                    height: 36
                                }}
                            />
                        </span>
                    </li>
                    <li>
                        <Checkbox inline>
                            记住密码
                        </Checkbox>
                        <a href="" className={"pull-right hover-theme-color "+styles['forget-passwd']}>忘记密码?</a>
                    </li>
                    <li>
                        <Button className="theme-bg-color" >
                            登录
                        </Button>
                        <Button>
                            微信直接登录
                        </Button>
                    </li>
                    <li>
                        还不是会员？<a className="theme-color hover-theme-color" href="javascript:;">免费注册</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserLoginComponent;