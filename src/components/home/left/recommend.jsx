import React, { Component } from 'react';

//css
import styles from 'css/pages/home.css';

class RecommendComponent  extends Component {
    data = [
        {type:1,src:'images/home/img_01.jpg',href:''},
        {type:0},
        {type:0},
        {type:0}
    ]
    render() {
        return (
            <div>
                <div className={styles.title}>
                    <div className={'theme-bg-color '+styles.extra}>
                        优质推荐
                    </div>
                </div>
                <div className={styles.menu}>
                    {
                        this.data.map((item,index)=>{
                            const {type,src,href} = item;
                            return (
                                <div key={index} style={{
                                    width: type ? '360px' : '120px'
                                }}>
                                    {type ? 
                                        <a href={href} target="_blank">
                                            <img src={process.env.PUBLIC_URL+src} alt=""/>
                                        </a>
                                    : <img src={`${process.env.PUBLIC_URL}images/home/xuwei.jpg`} alt=""/>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RecommendComponent;