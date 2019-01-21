import React, { Component } from 'react';
import Header from '../components/common/header';

export default class Contact extends Component {
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
                              <h1 className="page-title">Contact</h1>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="contact-page-section sec-spacer">
        	<div className="container">
        		<div id="googleMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.568807849802!2d3.441486014160739!3d6.449363725811501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e61fcae2d1%3A0x62cadeca463a9fb1!2sSuite+5%2C+2nd+floor%2C+18+Femi+Okunnu+Rd%2C+Ikoyi%2C+Lagos!5e0!3m2!1sen!2sng!4v1527802339128" width="600" height="450" frameBorder="0" data-style="border:0" allowFullScreen></iframe>

                </div>

        		<div className="row contact-address-section">
    				<div className="col-md-4">
    					<div className="contact-info contact-address">
    						<i className="icofont icofont-social-google-map"></i>
    						<h4>Address</h4>
    						<p>4, Cantonment Rd, Barack Square East Murshidabad,</p>
    						<p>West Bengal, India - 724101</p>
    					</div>
    				</div>
    				<div className="col-md-4">
    					<div className="contact-info contact-phone">
    						<i className="icofont icofont-ui-cell-phone"></i>
    						<h4>Phone Number</h4>
    						<a href="tel:+03482252809">+03482252809</a>
    						<a href="tel:+2390-875-2235">/250142</a>
    					</div>
    				</div>
    				<div className="col-md-4">
    					<div className="contact-info contact-email">
    						<i className="icofont icofont-email"></i>
    						<h4>Email Address</h4>
    						<a href="mailto:info@goldenmemoria.com"><p>info@goldenmemoria.com</p></a>
    						<a href="/"><p>www.goldenmemoria.com</p></a>
        				</div>
        			</div>
        		</div>

			</div>
        </div>

  </React.Fragment>
    )
  }
}
