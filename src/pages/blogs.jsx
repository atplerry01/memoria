import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/common/header";
import { blogContent } from "../constant/content";

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
                      <a href="blog-details.html">
                        {entity.title}
                      </a>
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
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/a.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        Value addition in yarn dyed Apparel
                      </a>
                    </h4>

                    <p>
                      The Indian Textile Industry is very competitive &always
                      thrives for innovation for its survival.
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/b.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        We Still Look Other Helpful Resources
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/c.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        Creative Ideas For Next Conference
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/d.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        Love The Name Of This Event Planning
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/e.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        Love The Name Of This Event Planning
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/f.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        Find a Great Speaker On Your Event
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/g.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        You Can Find Event Everything Here
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/h.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        From Event Venue Ideas to Reviews
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 hidden-md">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="images/blog/i.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <div className="blog-date">28 June 2017</div>
                      <ul className="meta-author">
                        <li className="time">
                          <a href="#">
                            <i className="fa fa-heart" /> 52
                          </a>
                        </li>
                        <li className="date">
                          <i className="fa fa-comments" /> 05
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <a href="blog-details.html">
                        The Leader In Event Technology
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissi mos
                      ducimus qui blanditiis praesentium volup tatum deleniti
                      atque
                    </p>
                    <a className="readmore-btn" href="blog-details.html">
                      Read More <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
