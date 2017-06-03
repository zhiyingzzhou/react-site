import React, { Component } from 'react';
//css
import styles from 'css/pages/home.css';

import RadioComponent from 'components/radio';

class FeedBackComponent extends Component {

    state = {
        radioCat : [
            {text:'咨询',value:false},
            {text:'建议',value:false},
            {text:'投诉',value:false},
            {text:'其他',value:false},
        ],
        length: 0,
        fbContent:''
    }

    handleClick = index => {
        let {radioCat} = this.state;
        radioCat.forEach(item=>{
            item.value = false;
        });
        radioCat[index].value = true;
        this.setState({radioCat});
    }

    handleChange = e => {
        let value = e.target.value;
        if(value.length > 144) return ;
        this.setState({
            length: value.length,
            fbContent: value
        });
    }

    render() {
        const {radioCat,fbContent,length} = this.state;
        return (
            <div className={styles.feedback}>
                <div className={styles['system-notice-title']}>
                    留言板
                </div>
                <div className={styles['fb-cat']}>
                    {
                        radioCat.map((item,index)=>{
                            const {text,value} = item;
                            return (
                                <RadioComponent
                                    key={index}
                                    name="fb_cat"
                                    value={value}
                                    click={()=>this.handleClick(index)}
                                >
                                    {text}
                                </RadioComponent>
                            )
                        })
                    }
                </div>
                <div className={styles['leave-word']}>
                    <textarea 
                        name="fb_content" 
                        id="fb_content" 
                        maxLength="144"
                        placeholder="请留下您的联系方式"
                        onChange={this.handleChange}
                        value={fbContent}
                    >
                    </textarea>
                    <div className={styles['add-up']}>
                        <span>{length}</span>
                        /144
                    </div>
                </div>
                <button>
                    提交
                </button>
            </div>
        );
    }
}

export default FeedBackComponent;