import React, { Component } from 'react';
import Header from '../components/common/header';
import { gallerySmallContent } from "../constant/gallery";

export default class Gallery extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          gallery: gallerySmallContent
        };
      }

  render() {

    const { gallery } = this.state;
    console.log(gallery);
    
    const renderGallery = () => {
        return gallery.map((entity, index) => {  
          return (
              <div class="col-lg-4 col-md-6">
                  <div class="venues-details text-center">
                      <img src={entity.imagePath} alt="" style={{height: 400}} />
                      <h3 class="venues-title"><span>{entity.title}</span></h3>
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
                <img src="images/banner/about.jpg" alt="" style={{ height: "160px" }} />
                <div className="breadcrumbs-inner-shape">
                    <div className="breadcrumbs-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="page-title">Gallery 2</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-venues-section">
                <div class="venues-inner">
                    <div class="container">

                        <div class="row">

                            {renderGallery()}

                        </div>
                    </div>
                </div>
                <div id="googleMap"></div>
            </div>

        </React.Fragment>
    )
  }
}
