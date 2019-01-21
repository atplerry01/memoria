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
    						<p>503  Old Buffalo Street</p>
    						<p>Northwest #205, New York-3087</p>
    					</div>
    				</div>
    				<div className="col-md-4">
    					<div className="contact-info contact-phone">
    						<i className="icofont icofont-ui-cell-phone"></i>
    						<h4>Phone Number</h4>
    						<a href="tel:+3453-909-6565">+3453-909-6565</a>
    						<a href="tel:+2390-875-2235">+2390-875-2235</a>
    					</div>
    				</div>
    				<div className="col-md-4">
    					<div className="contact-info contact-email">
    						<i className="icofont icofont-email"></i>
    						<h4>Email Address</h4>
    						<a href="mailto:infoname@gmail.com"><p>infoname@gmail.com</p></a>
    						<a href="#"><p>www.yourname.com</p></a>
        				</div>
        			</div>
        		</div>

        		<div className="contact-comment-section">
        			<h4>Leave Comment</h4>
                    <div id="form-messages"></div>
					<form id="contact-form" method="post" action="mailer2.php">
						<fieldset>
							<div className="row">                                      
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>First Name*</label>
										<input name="fname" id="fname" className="form-control" type="text" />
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>Last Name*</label>
										<input name="lname" id="lname" className="form-control" type="text" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>Email*</label>
										<input name="email" id="email" className="form-control" type="email" />
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>Subject *</label>
										<input name="subject" id="subject" className="form-control" type="text" />
									</div>
								</div>
							</div>
							<div className="row"> 
								<div className="col-md-12 col-sm-12">    
									<div className="form-group">
										<label>Message *</label>
										<textarea cols="40" rows="10" id="message" name="message" className="textarea form-control"></textarea>
									</div>
								</div>
								<div className="col-md-12 col-sm-12 col-xs-12">         
									<div className="form-group mb-0">
										<input className="btn-send" type="submit" value="Submit Now" />
									</div>
								</div>
							</div>    
						</fieldset>
					</form>						
        		</div>
        	</div>
        </div>

  </React.Fragment>
    )
  }
}
