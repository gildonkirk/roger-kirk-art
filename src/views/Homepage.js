import React, { Component } from 'react';
import HomeBody from '../components/Home/HomeBody';
import HomeJumbotron from '../components/Home/HomeJumbotron';
import FooterNav from '../components/Unis/FooterNav';

class Homepage extends Component {
  render() {
    return (
      <div className="HomepageContainer container-fluid">
        <HomeJumbotron />
        <HomeBody />
        <FooterNav />
      </div>
    );
  }
};

export default Homepage;
