import React, { Component } from "react";
import renderHTML from "react-render-html";
import Header from "../components/common/header";
import { alumniContent } from "../constant/alumni";

export default class AlumniDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alumni: alumniContent
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    if (params) {
      this.setState({ selectedAlumni: params.id });
      const alumnus = this.state.alumni.filter(m => m.id === params.id);
      this.setState({ alumnus });
	}
	
	window.scrollTo(0, 0);
  }

  render() {
    const { alumnus } = this.state;

    const renderAlumni = () => {
      if (alumnus) {
        return alumnus.map((entity, index) => {
          let pageRender = "";
          if (entity.content) {
            pageRender = renderHTML(entity.content);
          } else {
            pageRender = "";
          }

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
                    <h1 className="page-title">Alumni</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderAlumni()}

      
	  </React.Fragment>
    );
  }
}
