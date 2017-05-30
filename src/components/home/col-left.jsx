import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';

//css
import styles from 'css/pages/home.css';

import RecommendComponent from './left/recommend';
import TaskComponent from './left/task';

class ColLeftComponent  extends Component {
    render() {
        return (
            <Col className={"pull-left "+styles['col-left']}>
                  <RecommendComponent />
                  <TaskComponent />
            </Col>
        );
    }
}

export default ColLeftComponent;