import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';

//css
import styles from 'css/pages/home.css';

import ProfileComponent from './right/profile';
import ScrollNoticeComponent from './right/notice';
import SystemNoticeComponent from './right/system-notice';
import FeedBackComponent from './right/feedback';

class ColRightComponent  extends Component {
    render() {
        return (
            <Col className={"pull-right "+styles['col-right']}>
                 <ProfileComponent />
                 <ScrollNoticeComponent />
                 <SystemNoticeComponent />
                 <FeedBackComponent />
            </Col>
        );
    }
}

export default ColRightComponent;