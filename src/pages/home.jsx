import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

//css
import styles from 'css/pages/home.css';

import BannerComponent from 'components/home/banner';
import ColLeftComponent from 'components/home/col-left';
import ColRightComponent from 'components/home/col-right';


class HomePage extends Component {
  render() {
    
    return (
      <div>
          <BannerComponent />
          <Grid fluid>
              <Row className={styles.row}>
                  <ColLeftComponent />
                  <ColRightComponent />
              </Row>
          </Grid>
      </div>
    );
  }
}

export default HomePage;