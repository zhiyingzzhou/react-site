import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';

//css
import styles from 'css/pages/home.css';

import ProfileComponent from './right/profile';
import ScrollNewsComponent from './right/news';

class ColRightComponent  extends Component {
    render() {
        return (
            <Col className={"pull-right "+styles['col-right']}>
                 <ProfileComponent />
                 <ScrollNewsComponent />
            </Col>
        );
    }
}

export default ColRightComponent;