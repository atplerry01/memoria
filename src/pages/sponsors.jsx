import React, { Component } from 'react';
import Header from '../components/common/header';

export default class Sponsors extends Component {
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
                              <h1 className="page-title">Sponsors</h1>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="our-event-sponsors2 sponsors-border-style pt-100 pb-100">
			<div class="container">
				<div class="sec-title3 text-center">
                    <span>Sponsors</span>
                    <h2>Our Platinam Sponsors</h2> 
                </div>
                <div class="sponsor-tabs-content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sponsors-list">
                                <ul>
                                    <li><a href="#"><img src="images/partner/1.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/2.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/4.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/5.png" alt="" /></a></li>
                                </ul>
                            </div>
                            <div class="sponsors-list">
                                <ul>
                                    <li><a href="#"><img src="images/partner/6.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/7.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/8.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/9.png" alt="" /></a></li>
                                </ul>
                            </div> 
                            <div class="sponsors-list">
                                <ul>
                                    <li><a href="#"><img src="images/partner/7.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/8.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/9.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/partner/10.png" alt="" /></a></li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
                
			</div>
        </div>



  </React.Fragment>
    )
  }
}
