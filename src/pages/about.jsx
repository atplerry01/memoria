import React, { Component } from 'react'
import Header from '../components/common/header';

export default class About extends Component {
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
                                    <h1 className="page-title">About Us</h1>
                                    
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
                                <a href="events-details.html">Government College Of Engineering&Textile Technology, Berhampore</a>
                            </div>
                            <div className="event-meta">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>Established on 18th July 1927 </span>
                                </div>
                               
                                <div className="event-location">
                                    <i className="fa fa-map-marker"></i>
                                    <span>Murshidabad, West Bengal, Pin : 742101</span>
                                </div>
                            </div>
                           
                            <div className="event-desc">
                                <p>
                                The college was established at Berhampore on 18th July 1927 and now under the administrative control of Directorate of Technical Education
Govt Of West Bengal. In 1963 a 4 year B Sc. (Tech. ) degree was started
and the degree was subsequently converted into B Tech since 1998 under
the aegis of University of Calcutta In 2004, the institute was accredited by
the National Board of Accreditation (NBA)

                                </p>
                                <p>
                                In 2001, college was transformed into a multi-disciplinary institute
introducing B Tech in Computer Science &Engineering From 2010-11
academic session two new core engineering UG courses in Mechanical
Engineering and Electrical Engineering has been introduced All the four
UG courses are now under the academic control of Maulana Abul Kalam
Azad University of Technology, West Bengal

                                </p>

                                <p>
                                We have a large Alumnus network, as our seniors are present in
leading positions of many Textile, L.T. industries and various other services

                                </p>

                                <p>
                                We will be organising our "Reminiscence 2018- The Mega
Reunion, on December 24th and 25th 2018. A souvenir will be published on
the occasion which will be widely circulated among the national and
international corporates and institutes. There will be articles from leading
academicians, industrial leaders, researchers and writers who have made
their presence in the industry. We seek your active support in making this
occasion a grand success

                                </p>
                            </div>
                            
                            <div className="share-area">
                                <div className="row rs-vertical-middle">
                                    <div className="col-md-4">
                                        {/* <div className="book-btn">
                                            <a href="#" className="primary-btn">Buy Now ticket</a>
                                        </div> */}
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

                </div>
            </div>
        </div>


        </React.Fragment>

    )
  }
}
