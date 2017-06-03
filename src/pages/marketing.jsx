import React, { Component } from 'react';
import BasicPage from './basic-page';
import FooterComponents from 'components/footer';
//css
import styles from 'css/pages/marketing.css';

class MarketingPage extends BasicPage {

    state = {
        iconData: []
    }

    descData = [
        {text:'海量公众号媒体',src:'tuiguang_mt'},
        {text:'用户群体精确定位',src:'tuiguang_dw'},
        {text:'广告效率最大化',src:'tuiguang_gg'}
    ]

    componentDidMount() {
        this.hideNProgress();
        let iconData = [];
        for(let i=1;i<22;i++){
            iconData.push(i);
        }
        this.setState({iconData});
    }

    render() {
        const {iconData} = this.state;
        const {PUBLIC_URL} = process.env;
        return (
            <div>
                <div className={styles.banner}>
                </div>
                <ul className={styles.ul}>
                    {
                        this.descData.map((item,index)=>{
                            const {text,src} = item;
                            return (
                                <li
                                    key={index}
                                >
                                    <img 
                                        src={PUBLIC_URL+'/images/marketing/'+src+'.png'} 
                                        alt="img"
                                        width="130"
                                        height="130"
                                    />
                                    <br/>
                                    <p>{text}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <div className={styles['media-container']}>
                        <br/>
                        <img 
                            src={PUBLIC_URL+'/images/marketing/tghz.png'} 
                            alt="img"
                            width="1000"
                            height="115"
                        />
                        <br/>
                        <br/>
                        <div className={styles.icons}>
                            {
                                iconData.map((item,index)=>{
                                    let src = '';
                                    if(index === 10) {
                                        return (
                                            <div key={index} className={styles.extra}>
                                                <img 
                                                    src={PUBLIC_URL+'/images/marketing/tghz_text.png'} 
                                                    alt="img"
                                                />
                                            </div>
                                        )
                                    }
                                    if(index <= 9){
                                        src = item < 10 ? '0'+item : item;
                                    }else{
                                        src = item - 1;
                                    }
                                    return (
                                        <div key={index} className={styles.item}>
                                            <img 
                                                src={PUBLIC_URL+'/images/marketing/gzh_'+src+'.png'} 
                                                alt="img"
                                                width="66"
                                                height="66"
                                            />
                                            <br/>
                                            <p>阿Sam的午夜场</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.button}>
                            <button>商务合作</button>
                        </div>
                    </div>
                </div>
                <FooterComponents />
            </div>
        );
    }
}

export default MarketingPage;