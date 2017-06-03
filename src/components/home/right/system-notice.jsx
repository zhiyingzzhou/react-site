import React, { Component } from 'react';
//css
import styles from 'css/pages/home.css';

import VerticalScrollComponent from 'components/vertical-scroll';

class SystemNoticeComponent  extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const {data} = this.state;
        for(let i=0;i<15;i++){
            let obj = {};
            obj = {
                title: '测试'+i,
                time: '2017-02-03'
            }
            data.push(obj);
        }
        this.setState({data});
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles['system-notice']}>
                <div className={styles['system-notice-title']}>
                    系统公告
                    <a href="javascript:;" ></a>
                </div>
                <VerticalScrollComponent
                    style={{
                        height: 285
                    }}
                    scrollCallBack={()=>{
                        data.push(data.shift());
                        this.setState({data});
                    }}
                    autoplayDisableOnInteraction={true}
                >
                    {
                        data.length > 0 && data.map((item,index)=>{
                            const {title,time} = item;
                            return (
                                <div 
                                    className={styles['system-notice-item']} 
                                    key={index}
                                >
                                    <div className="hover-theme-color">{title}</div>
                                    <time>[{time}]</time>
                                </div> 
                            )
                        })
                    }
                </VerticalScrollComponent>
            </div>
        );
    }
}

export default SystemNoticeComponent;