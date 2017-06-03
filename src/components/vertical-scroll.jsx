import React, { Component } from 'react';

import styles from 'css/components/vertical-scroll.css';

class VerticalScrollComponent  extends Component {

    Interval = null;
    isDisabled = false;

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

    clearLoop = () => {
        if(this.Interval === null) return ;
        clearInterval(this.Interval);
    }

    loop = () => {
        const {scrollCallBack} = this.props;
        let {marginTop} = this.state;
        let step = 60;
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
                setTimeout(()=>{
                    this.loop();
                },2000);
            }
        },10);
    }

    resetPosition = () => {
        const {scrollCallBack} = this.props;
        let {marginTop} = this.state,
            step = 60 + marginTop;
        let loop = setInterval(()=>{
            --step ;
            this.setState({
                marginTop: --marginTop
            });
            if(step == 0){
                this.setState({
                    marginTop: 0
                });
                if(scrollCallBack){
                    scrollCallBack();
                }
                clearInterval(loop);
            }
        },10);
    }

    handleMouseEnter = () => {
        const {marginTop} = this.state;
        const {autoplayDisableOnInteraction} = this.props;
        if(autoplayDisableOnInteraction) {
            if(marginTop > -60 && marginTop < 0){
                this.resetPosition();
            }
            this.isDisabled = true;
            this.clearLoop();
        }
    }

    handleMouseLeave = () => {
        if(this.isDisabled){
            this.isDisabled = false;
            this.loop();
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