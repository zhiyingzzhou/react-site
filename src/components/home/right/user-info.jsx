import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
//css
import styles from 'css/pages/home.css';

class UserInfoComponent extends Component {

    state = {
        bool: false
    }

    handleHelpInfoModal = bool => {
        this.setState({bool});
    }

    render() {
        const {bool} = this.state;
        return (
            <div>
                <div className={styles.info}>
                    <img 
                        src={process.env.PUBLIC_URL+'images/home/default_avatar.png'} 
                        alt="用户默认头像"
                        width="75"
                        height="77"
                        className="pull-left"
                    />
                    <table width="140">
                        <tbody>
                            <tr>
                                <td colSpan="3">13564030785@163…</td>
                            </tr>
                            <tr>
                                <td width="80">赚客</td>
                                <td width="40">
                                    <span className={styles.radius + " theme-bg-color"}>
                                        LV0
                                    </span>
                                </td>
                                <td>
                                    <img 
                                        src={process.env.PUBLIC_URL+'/images/home/help.png'} 
                                        alt="赚客提示"
                                        width="14"
                                        height="14"
                                        onClick={()=>this.handleHelpInfoModal(!bool)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    发布者
                                </td>
                                <td>
                                    <span className={styles.radius} style={{
                                        backgroundColor: '#CCC'
                                    }}>
                                        LV0
                                    </span>
                                </td>
                                <td><span>&nbsp;</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles['help_tips']} style={{
                        display: bool ? 'block' : 'none'
                    }}>
                        赚客等级通过完成自由任务升级
                        <br />
                        等级越高，可接的自由任务越多。
                        <span id="desc">
                        </span>
                    </div>
                </div>
                <div className={styles.balance}>
                    <div className={styles.col}>
                        账号余额
                        <div className="pull-right">
                            <span className="theme-color" style={{
                                fontSize: '1.5em',
                                lineHeight: '14px'
                            }}>
                                11 </span>
                             积分
                        </div>
                    </div>
                    <div className={styles.col}>
                        红包余额
                        <div className="pull-right">
                            <span className="theme-color" style={{
                                fontSize: '1.5em',
                                lineHeight: '14px'
                            }}>
                                0 </span>
                             积分
                        </div>
                    </div>
                </div>
                <p className={styles.completed}>
                    今日已做
                    <span className="theme-color" style={{
                        fontSize: '1.5em'
                    }}> 2 </span>
                     个任务
                </p>
                <Button className={styles.button}>你有2个自由任务进行中</Button>
                <div className={styles.exchange}>
                    <Button className="pull-left">
                        充值
                    </Button>
                    <Button className="theme-bg-color pull-right">
                        提现
                    </Button>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default UserInfoComponent;