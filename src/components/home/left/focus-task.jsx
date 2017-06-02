import React, { Component } from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';
//css
import styles from 'css/pages/home.css';

class FocusTaskComponent  extends Component {
    state = {
        activePage: 1,
        data: [
            {src: '0.jpg',title:'机械防水手表',fansnum: 870,price:10}
        ]
    }

    componentDidMount() {
        let data = [];
        for(var i=0;i<20;i++){
            data.push(this.state.data[0]);
        }
        this.setState({data});
    }

    handleSelect = activePage => {
        this.setState({activePage});
    }

    render() {
        const {data,activePage} = this.state;
        return (
            <div>
                {
                    data.map((item,index)=>{
                        const {src,title,fansnum,price} = item;
                        return (
                            <div key={index} className={styles.box}>
                                <div className={styles.qc}>
                                    <img width="100" height="100" src={process.env.PUBLIC_URL+'images/home/'+src} alt=""/>
                                </div>
                                <strong>{title}</strong>
                                <p className="assist-color">
                                    获得粉丝：{fansnum}
                                    <br />
                                    单价：<span className="theme-color">{price}</span>
                                </p>
                            </div>
                        )
                    })
                }
                <div className="clearfix"></div>
                <Pagination
                    className={styles.pagination}
                    bsSize="small"
                    items={30}
                    activePage={activePage}
                    boundaryLinks
                    ellipsis
                    maxButtons={10}
                    onSelect={this.handleSelect} 
                />
            </div>
        );
    }
}

export default FocusTaskComponent;