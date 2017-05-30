import React, { Component } from 'react';

//css
import styles from 'css/pages/home.css';

// 关注任务
import FocusTaskComponent from './focus-task';

class TaskComponent  extends Component {

    data = ['关注任务','阅读任务','自由任务']

    state = {type:0}

    changeType = type => {
        if(type === this.state.type) return ;
        this.setState({type});
    }

    render() {
        const {type} = this.state;
        return (
            <div>
                <ul className={styles.title}>
                    {
                        this.data.map((item,index)=>{
                            return (
                                <li 
                                    key={index} 
                                    className={type === index ? 'theme-bg-color active' : ''}
                                >
                                    <a 
                                        href="javascript:;"
                                        className={type === index ? 'white-color hover-white-color' : 'font-color hover-theme-color'}
                                        onClick={()=>this.changeType(index)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.tips}>
                    您尚未登录，无法获得任务奖励。
                    <a href="javascript:;">去登陆</a>
                </div>
                {type === 0 && <FocusTaskComponent />}
            </div>
        );
    }
}

export default TaskComponent;