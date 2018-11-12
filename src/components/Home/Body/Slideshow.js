import React, { Component } from 'react';

class Slideshow extends Component {
  render() {
    return (
      <div className="SlideshowContainer">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-wrap="true" >
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/bowl1.jpg")} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/bowl2.jpg")} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/bowl3.jpg")} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/mug.jpg")} alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/plate1.jpg")} alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../../../src/assets/slideshowImages/plate2.jpg")} alt="Sixth slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
};

export default Slideshow;
