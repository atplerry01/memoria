import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/common/header";
import { blogContent } from "../constant/blogs";

export default class Blogs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      blogs: blogContent
    };
  }

  render() {
    const { blogs } = this.state;

    const renderBlogs = () => {
      return blogs.map((entity, index) => {
          const linkUrl = '/blog/' + entity.id;

        return (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="blog-item">
                  <div className="blog-img">
                    <Link to={linkUrl}>
                        <img src={entity.imagePath} alt="" />
                    </Link>

                  </div>
                  <div className="blog-details">
                    <h4 className="blog-title">
                      <Link to={linkUrl}>
                        {entity.title}
                      </Link>
                    </h4>

                    <p>
                      {entity.summary}
                    </p>

                    <Link to={linkUrl}>
                        Read More &nbsp;
                        <i className="fa fa-angle-right" />
                    </Link>
                   
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
                    <h1 className="page-title">Blogs</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rs-blog" className="rs-blog blog-pages">
          <div className="container">
            <div className="row">

                {renderBlogs()}
           
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
