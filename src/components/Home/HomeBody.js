import React, { Component } from 'react';
import Slideshow from './Body/Slideshow';

class HomeBody extends Component {
  render() {
    return (
      <div className="homeBodyContainer">
        <Slideshow />
      </div>
    );
  }
};

export default HomeBody;
