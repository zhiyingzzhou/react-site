import React, { Component } from 'react';

class BasicPage  extends Component {

    showNProgress = () => {
        window.NProgress.start();
    }

    hideNProgress = () => {
        window.NProgress.done();
    }
}

export default BasicPage;