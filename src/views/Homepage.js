import React, { Component } from 'react';
import HomeBody from '../components/Home/HomeBody';
import HomeJumbotron from '../components/Home/HomeJumbotron';

class Homepage extends Component {
  render() {
    return (
      <div className="HomepageContainer">
        <HomeJumbotron />
        <HomeBody />
      </div>
    );
  }
};

export default Homepage;
