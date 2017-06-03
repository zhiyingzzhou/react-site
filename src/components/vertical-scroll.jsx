import React, { Component } from 'react';

import styles from 'css/components/vertical-scroll.css';

class VerticalScrollComponent  extends Component {

    Interval = null;
    Timeout = null;
    pauseScroll = false;

    state = {
        marginTop: 0
    }

    defaultProps = {
        autoplayDisableOnInteraction: false
    }

    componentDidMount() {
        setTimeout(()=>{
            this.loop();
        },2000);
    }

    componentWillUnmount() {
        this.clearLoop();
        this.clearTimeout();
    }

    clearTimeout() {
        if(this.Timeout === null) return ;
        clearTimeout(this.Timeout);
    }

    clearLoop = () => {
        if(this.Interval === null) return ;
        clearInterval(this.Interval);
    }

    loop = () => {
        const {scrollCallBack} = this.props;
        let {marginTop} = this.state;
        let step = 60 + marginTop;
        this.Interval = setInterval(()=>{
            --step ;
            this.setState({
                marginTop: --marginTop
            });
            if(step === 0){
                this.clearLoop();
                this.setState({
                    marginTop: 0
                });
                if(scrollCallBack){
                    scrollCallBack();
                }
                if(!this.pauseScroll){
                    this.Timeout = setTimeout(()=>{
                        this.loop();
                    },2000);
                }
            }
        },10);
    }

    handleMouseEnter = () => {
        const {marginTop} = this.state;
        const {autoplayDisableOnInteraction} = this.props;
        if(autoplayDisableOnInteraction) {
            this.pauseScroll = true;
            this.clearTimeout();
        }
    }

    handleMouseLeave = () => {
        if(this.pauseScroll){
            this.pauseScroll = false;
            this.Timeout = setTimeout(()=>{
                this.loop();
            },2000);
        }
    }

    render() {
        const {style={},children} = this.props;
        return (
            <div 
                className={styles['scroll-container']} 
                style={style}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div style={{
                    marginTop: this.state.marginTop
                }}>
                    {children}
                </div>
            </div>
        );
    }
}

export default VerticalScrollComponent;