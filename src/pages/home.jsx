import React, { Component } from 'react';
import BasicPage from './basic-page';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

//css
import styles from 'css/pages/home.css';
import FooterComponents from 'components/footer';
import BannerComponent from 'components/home/banner';
import ColLeftComponent from 'components/home/col-left';
import ColRightComponent from 'components/home/col-right';

class HomePage extends BasicPage {

  componentDidMount() {
    this.hideNProgress();
  }

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
          <FooterComponents />
      </div>
    );
  }
}

export default HomePage;