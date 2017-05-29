import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// topbar
import TopBarComponent from 'components/topbar';
import NabarComponent from 'components/navbar';

export default class App extends Component {
  render() {
    return (
        <Scrollbars style={{width:'100%',height:'100%'}}>
            <TopBarComponent  />
            <NabarComponent location={this.props.location} />
            {this.props.children}
        </Scrollbars>
    );
  }
}