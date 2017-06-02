import React, { Component } from 'react';

//css
import styles from 'css/pages/home.css';

import UserLoginComponent from './user-login';
import UserInfoComponent from './user-info';

class ProfileComponent  extends Component {
  render() {
    const isLogin = false;
    return (
        <div className={styles.profile}>
            {!isLogin &&
                <UserLoginComponent />
            }
            {isLogin &&
                <UserInfoComponent />
            }
        </div>
    );
  }
}

export default ProfileComponent;