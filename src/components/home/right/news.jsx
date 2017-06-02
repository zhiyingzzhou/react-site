import React, { Component } from 'react';
//css
import styles from 'css/pages/home.css';

class ScrollNewsComponent  extends Component {

    state = {
        data: [
        ],
        marginTop: 0
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
        this.loop();
    }

    loop = () => {
        let {marginTop,data} = this.state;
        let step = 60;
        let Interval = setInterval(()=>{
            --step ;
            this.setState({
                marginTop: --marginTop
            });
            if(step === 0){
                clearInterval(Interval);
                setTimeout(()=>{
                    this.loop();
                    data.push(data.shift());
                    console.log(data);
                    debugger
                    this.setState({data});
                },2000);
            }
        },10);
    }

    render() {
        const {data,marginTop} = this.state;
        return (
            <div className={styles.news}>
                <div className={styles.scroll}>
                    <div className={styles.panel} style={{
                        marginTop: marginTop
                    }}>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ScrollNewsComponent;