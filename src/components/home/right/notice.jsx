import React, { Component } from 'react';
//css
import styles from 'css/pages/home.css';

import VerticalScrollComponent from 'components/vertical-scroll';

class ScrollNoticeComponent  extends Component {

    state = {
        data: [
        ]
    }

    componentDidMount() {
        const {data} = this.state;
        for(let i=0;i<15;i++){
            let obj = {};
            obj = {
                username: '测试'+i,
                score: i
            }
            data.push(obj);
        }
        this.setState({data});
    }

    render() {
        const {data,marginTop} = this.state;
        return (
            <div className={styles.notice}>
                <VerticalScrollComponent 
                    style={{height:235}}
                    scrollCallBack={()=>{
                        data.push(data.shift());
                        this.setState({data});
                    }}
                >
                    {
                        data.length > 0 && data.map((item,index)=>{
                            return (
                                <div key={index} className={styles['panel-item']}>
                                    用户
                                    <span>{item.username}</span>
                                    完成阅读任务获得
                                    <span>{item.score}积分</span>
                                </div>
                            )
                        })
                    }
                </VerticalScrollComponent>
            </div>
        );
    }
}

export default ScrollNoticeComponent;