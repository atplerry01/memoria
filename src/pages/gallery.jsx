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

      <div class="rs-event-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="event-details-content">
                            <div class="event-title">
                                <a href="events-details.html">New Year Music Festival And Award Show</a>
                            </div>
                            <div class="event-meta">
                                <div class="event-date">
                                    <i class="fa fa-calendar"></i>
                                    <span>28 June 2017</span>
                                </div>
                                <div class="event-time">
                                    <i class="fa fa-clock-o"></i>
                                    <span>12.30AM-05.30PM</span>
                                </div>
                                <div class="event-location">
                                    <i class="fa fa-map-marker"></i>
                                    <span>Venue A, Main Campus</span>
                                </div>
                            </div>
                            <div class="event-img">
                                <img src="images/events/event-details.jpg" alt="Event Details Images" />
                            </div>
                            <div class="event-desc">
                                <p>
                                    A university event license follows the same format as the standard event license, except this event is co-branded with a university name (e.g., “TEDxNYU”). This means that the event is hosted by that college or university, so you’ll need permission from that school to hold the event and to use the university's name. Usually, the audience of a university event are students.
                                </p>
                                <p>
                                    For a university event type, your focus or theme should be multidisciplinary and broad, and address a variety of topics. You’ll want to feature a diversity of speakers from across several disciplines, and speakers from the university where you’re holding your event. To get an idea of what you want the focus of your event, A university event license follows the same format as the standard event license, except this event is co-branded with a university.
                                </p>
                            </div>
                            
                            <div id="googleMap"></div>
                            
                            <div class="share-area">
                                <div class="row rs-vertical-middle">
                                    <div class="col-md-4">
                                        <div class="book-btn">
                                            <a href="#" class="primary-btn">Buy Now ticket</a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="share-inner">
                                            <span>You Can Share It :</span>
                                            <a href="#"><i class="fa fa-facebook"></i> Facebok</a>
                                            <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                                            <a href="#"><i class="fa fa-google"></i> Google</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mmt-40">
                        <div class="sidebar-area">
                            <div class="search-box">
                                <h3 class="title">Search Event</h3>
                                <div class="box-search">
                                    <input class="form-control" placeholder="Search Here ..." name="srch-term" id="srch-term" type="text" />
                                    <button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div class="cate-box">
                                <h3 class="title">Categories</h3>
                                <ul>
                                    <li>
                                        <i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Business <span>(05)</span></a>
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Entertainment <span>(07)</span></a>
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Sports <span>(09)</span></a>
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Educational <span>(08)</span></a>
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right" aria-hidden="true"></i> <a href="#">Medical <span>(04)</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="latest-courses">
                                <h3 class="title">Popular posts</h3>
                                <div class="post-item">
	                                <div class="post-img">
	                                    <a href="blog-details.html"><img src="images/blog-details/sm1.jpg" alt="" title="News image" /></a>
	                                </div>
	                                <div class="post-desc">
	                                    <h4><a href="blog-details.html">Most Anticipated Report For The Event </a></h4>
	                                    <span class="duration">Admin
	                                    </span> 
	                                    <span class="date">28 Jun 2018</span>
	                                </div>
	                            </div>
	                            <div class="post-item">
	                                <div class="post-img">
	                                    <a href="blog-details.html"><img src="images/blog-details/sm2.jpg" alt="" title="News image" /></a>
	                                </div>
	                                <div class="post-desc">
	                                    <h4><a href="blog-details.html">Most Anticipated Report For The Event </a></h4>
	                                    <span class="duration">Admin</span> 
	                                    <span class="date">28 Jun 2018</span>
	                                </div>
	                            </div>
	                            <div class="post-item">
	                                <div class="post-img">
	                                    <a href="blog-details.html"><img src="images/blog-details/sm3.jpg" alt="" title="News image" /></a>
	                                </div>
	                                <div class="post-desc">
	                                    <h4><a href="blog-details.html">Most Anticipated Report For The Event </a></h4>
	                                    <span class="duration">Admin </span> 
	                                    <span class="date">28 Jun 2018</span>
	                                </div>
	                            </div> 
                            </div>
                            <div class="tags-cloud clearfix">
                                <h3 class="title">Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Music</a>
                                    </li>
                                    <li>
                                        <a href="#">Charity</a>
                                    </li>
                                    <li>
                                        <a href="#">festival</a>
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
