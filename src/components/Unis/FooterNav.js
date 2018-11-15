import React, { Component } from 'react';

class FooterNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse homeFooter" id="navbarNav">
          <ul className="navbar-nav footerList">
            <li className="nav-item active">
              <a className="nav-link" href="#">Pottery <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Murals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Photography</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">More</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default FooterNav;
