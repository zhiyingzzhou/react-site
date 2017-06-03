import React, { Component } from 'react';
// css
import styles from 'css/components/radio.css';

class RadioComponent extends Component {

    handleClick = () => {
        this.props.click();
    }

    render() {
        const {value,children} = this.props;
        return (
            <label 
                className={styles.label+' '+(value ? styles.active : '')}
                onClick={this.handleClick}
            >
                {children}
            </label>
        );
    }
}

export default RadioComponent;