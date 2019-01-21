import React, { Component } from 'react';
import Header from "../components/common/header";

export default class Advert extends Component {
  render() {
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
                                    <h1 className="page-title">Advert</h1>

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
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/1.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">Radission</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/2.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">Grand Imperial</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/3.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">La-Cambria</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/4.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">Aristocort</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/6.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">Burz Al Arab</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="venues-details text-center">
                                    <img src="images/venues/5.jpg" alt="" />
                                    <h3 class="venues-title"><a href="#">Hotel Gallaxy</a></h3>
                                    <span>1205 North Highway Street, Istambul</span>
                                    <p><strong>Distance to venue:</strong> 1.50 km <strong>Rate:</strong> $150/per day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="googleMap"></div>
            </div>

      </React.Fragment>
    )
  }
}
