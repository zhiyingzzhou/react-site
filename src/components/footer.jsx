import React, { Component } from 'react';
//css
import styles from 'css/components/footer.css';

class FooterComponents extends Component {
    render() {
      return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                Copyright ©2017 &nbsp;汕头市号角网络科技有限公司 &nbsp; &nbsp; 粤ICP备15107486号-3
            </div>
        </div>
      );
    }
}

export default FooterComponents;