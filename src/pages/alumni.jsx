import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/common/header";
import { alumniContent } from "../constant/alumni";

export default class Alumni extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      alumni: alumniContent
    };
  }

  render() {
    const { alumni } = this.state;
    console.log(alumni);

    const renderAlumnis = () => {
        return alumni.map((entity, index) => {
            const linkUrl = '/alumni/' + entity.id;
  
          return (

              <div className="col-lg-3 col-md-3">
                  <div className="team-item">
                      <div className="team-img">
                          <img src={entity.imagePath} alt={entity.name} />
                          <div className="normal-text">
                              <h4 className="team-name">{entity.name}</h4>
                              {/* <span className="subtitle">Sengupta</span> */}
                          </div>
                      </div>
                      <div className="team-content">
                          <div className="display-table">
                              <div className="display-table-cell">
                                  <div className="share-icons">
                                      <div className="border" />
                                      <ul className="team-social icons-1">
                                          <li>
                                              <a href="#" className="social-icon">
                                                  <i className="fa fa-facebook" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#" className="social-icon">
                                                  <i className="fa fa-twitter" />
                                              </a>
                                          </li>
                                      </ul>

                                      <ul className="team-social icons-2">
                                          <li>
                                              <a href="#" className="social-icon">
                                                  <i className="fa fa-skype" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#" className="social-icon">
                                                  <i className="fa fa-linkedin" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="team-details@">
                                      <h4 className="team-name">
                                          <Link to={linkUrl}>
                                            {entity.name}
                                          </Link>
                                      </h4>
                                      {/* <span className="postion">CEO & Founder</span> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          );
        });
      };

    return (
      <React.Fragment>
        <Header />
        <div className="rs-breadcrumbs">
          <img
            src="images/banner/about.jpg"
            alt=""
            style={{ height: "160px" }}
          />
          <div className="breadcrumbs-inner-shape">
            <div className="breadcrumbs-inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="page-title">Alumni</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rs-team" className="rs-team rs-team2 pt-100 pb-70">
          <div className="container">

            <div className="row">

                {renderAlumnis()}
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
