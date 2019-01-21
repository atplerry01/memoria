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

            <div id="rs-about" className="rs-about sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-3 hidden-md">
                            <div className="about-single-image">
                                <img src="images/about/7.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-des text-center">
                                <div className="sec-title3 text-center">
                                    <span>Welcome to Eventsia</span>
                                    <h2>About The Eventsia</h2>
                                </div>
                                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis dav praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa quinge officia deserunt mollitia animi</p>
                                <a className="primary-btn" href="about.html">Read more</a>
                            </div>
                        </div>
                        <div className="col-lg-3 mmt-40">
                            <div className="about-single-image text-right">
                                <img src="images/about/2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
  }
}
