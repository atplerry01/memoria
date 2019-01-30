import React, { Component } from "react";
import renderHTML from "react-render-html";
import Header from "../components/common/header";
import { blogContent } from "../constant/blogs";

export default class BlogDetail extends Component {
  // Blog details
  constructor(props, context) {
    super(props, context);

    this.state = {
      blogs: blogContent
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    if (params) {
      this.setState({ selectedBlog: params.id });
      const blog = this.state.blogs.filter(m => m.id === params.id);

      this.setState({ blog });
    }
  }

  render() {
    // find by id
    const { blog } = this.state;
    const renderBlogs = () => {
      if (blog) {
        return blog.map((entity, index) => {
          const pageRender = renderHTML(entity.pages);
          return <React.Fragment>{pageRender}</React.Fragment>;
        });
      }
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

        <div class="rs-event-details">
          <div class="container">
            <div class="row">
              {renderBlogs()}
              <div class="col-lg-4 col-md-12 mmt-40">
                <div class="sidebar-area">
            
                  <div class="cate-box">
                    <h3 class="title">Categories</h3>
                    <ul>
                      <li>
                        <i class="fa fa-angle-right" aria-hidden="true" />{" "}
                        <a href="#">
                          Technology <span>(00)</span>
                        </a>
                      </li>
                      <li>
                        <i class="fa fa-angle-right" aria-hidden="true" />{" "}
                        <a href="#">
                          Fibrics <span>(07)</span>
                        </a>
                      </li>
                      <li>
                        <i class="fa fa-angle-right" aria-hidden="true" />{" "}
                        <a href="#">
                          Industries <span>(09)</span>
                        </a>
                      </li>
                      <li>
                        <i class="fa fa-angle-right" aria-hidden="true" />{" "}
                        <a href="#">
                          Educational <span>(08)</span>
                        </a>
                      </li>
                      <li>
                        <i class="fa fa-angle-right" aria-hidden="true" />{" "}
                        <a href="#">
                          Careers <span>(04)</span>
                        </a>
                      </li>
                    </ul>
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
