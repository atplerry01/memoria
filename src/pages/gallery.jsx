import React, { Component } from "react";
import Header from "../components/common/header";
import { galleryVerticalContent } from "../constant/galleryVertical";

export default class Gallery extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gallery: galleryVerticalContent
    };
  }

  render() {
    const { gallery } = this.state;
    console.log(gallery);

    const renderGallery = () => {
      return gallery.map((entity, index) => {
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="venues-details text-center">
              <img src={entity.imagePath} alt="" />
              {/* <h3 className="venues-title">
                <span>{entity.title}</span>
              </h3> */}
              <span>{entity.content}</span>
            </div>
          </div>
        );
      });
    };

    return (
      <React.Fragment>
        <Header />

        <div className="rs-breadcrumbs">
          <img
            src="images/banner/about.jpg"
            alt=""
            style={{ height: "160px" }}
          />
          <div className="breadcrumbs-inner-shape">
            <div className="breadcrumbs-inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="page-title">Gallery 1</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rs-venues-section">
          <div className="venues-inner">
            <div className="container">
              <div className="row">{renderGallery()}</div>
            </div>
          </div>
          <div id="googleMap" />
        </div>
      </React.Fragment>
    );
  }
}
