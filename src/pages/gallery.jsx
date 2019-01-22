import React, { Component } from 'react';
import Header from '../components/common/header';

export default class Gallery extends Component {
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
                              <h1 className="page-title">Gallery</h1>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="rs-event-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="event-details-content">
                            <div className="event-title">
                                <a href="events-details.html">New Year Music Festival And Award Show</a>
                            </div>
                            <div className="event-meta">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>28 June 2017</span>
                                </div>
                                <div className="event-time">
                                    <i className="fa fa-clock-o"></i>
                                    <span>12.30AM-05.30PM</span>
                                </div>
                                <div className="event-location">
                                    <i className="fa fa-map-marker"></i>
                                    <span>Venue A, Main Campus</span>
                                </div>
                            </div>
                            <div className="event-img">
                                <img src="images/memo/gallery/1.png" alt="Event Details Images" />
                            </div>
                            <div className="event-desc">
                                <p>
                                    A university event license follows the same format as the standard event license, except this event is co-branded with a university name (e.g., “TEDxNYU”). This means that the event is hosted by that college or university, so you’ll need permission from that school to hold the event and to use the university's name. Usually, the audience of a university event are students.
                                </p>
                                <p>
                                    For a university event type, your focus or theme should be multidisciplinary and broad, and address a variety of topics. You’ll want to feature a diversity of speakers from across several disciplines, and speakers from the university where you’re holding your event. To get an idea of what you want the focus of your event, A university event license follows the same format as the standard event license, except this event is co-branded with a university.
                                </p>
                            </div>
                            
                            <div id="googleMap"></div>
                            
                            <div className="share-area">
                                <div className="row rs-vertical-middle">
                                    <div className="col-md-4">
                                        <div className="book-btn">
                                            <a href="#" className="primary-btn">Buy Now ticket</a>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="share-inner">
                                            <span>You Can Share It :</span>
                                            <a href="#"><i className="fa fa-facebook"></i> Facebok</a>
                                            <a href="#"><i className="fa fa-twitter"></i> Twitter</a>
                                            <a href="#"><i className="fa fa-google"></i> Google</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mmt-40">
                        <div className="sidebar-area">
                           
                            {/* <div className="cate-box">
                                <h3 className="title">Categories</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Technology <span>(05)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Fabric Industry <span>(07)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Alumni <span>(09)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Educational <span>(08)</span></a>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Medical <span>(04)</span></a>
                                    </li>
                                </ul>
                            </div> */}
                           
                            <div className="tags-cloud clearfix">
                                <h3 className="title">Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Fabrics</a>
                                    </li>
                                    <li>
                                        <a href="#">Technology</a>
                                    </li>
                                    <li>
                                        <a href="#">Alumni</a>
                                    </li>
                                    <li>
                                        <a href="#">Cirimony</a>
                                    </li>
                                    <li>
                                        <a href="#">Fair</a>
                                    </li>
                                    <li>
                                        <a href="#">Widding</a>
                                    </li>
                                    <li>
                                        <a href="#">world</a>
                                    </li>
                                    <li>
                                        <a href="#">Confarence</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div className="gallery-section-page pt-100 pb-70">
            <div className="gallery-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/memo/gallery/1.png" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/1.png"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/2.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/2.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/3.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/3.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/4.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/4.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/5.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/5.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/6.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/6.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/7.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/7.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-gallery">
                                <img src="images/gallery-page/8.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/8.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 hidden-md">
                            <div className="single-gallery">
                                <img src="images/gallery-page/9.jpg" alt="" />
                                <div className="popup-icon">
                                    <a className="image-popup" href="images/gallery-page/9.jpg"><i className="fa fa-arrows-alt"></i></a>
                                </div>
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
