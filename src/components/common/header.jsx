import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
       
        <header id="rs-header" className="rs-header inner-page fullwidth-header">

        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="main-menu">
              <div className="row">
                <div className="col-lg-2">
                  <div className="logo-area">
                    <a href="/">
                      <img src="images/logo.png" alt="logo" style={{height: 50}} /></a>
                  </div>
                </div>
                <div className="col-lg-10">
                  <a className="rs-menu-toggle"><i className="fa fa-bars"></i>Menu</a>
                  <nav className="rs-menu">
                    <ul className="nav-menu">
                      <li><a href="/">Home</a></li>
                      <li><Link to="/about">About</Link></li>
                      {/* <li><Link to="/sponsors">Sponsors</Link></li> */}
                      <li><Link to="/gallery">Gallery</Link></li>
                      <li><Link to="/alumni">Alumni</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                  {/* <div className="buy-tickets">
                    <Link to="/advert" className="primary-btn" data-animation-in="lightSpeedIn" data-animation-out="animate-out">View Advert</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

    )
  }
}
