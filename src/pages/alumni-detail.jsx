import React, { Component } from 'react';
import Header from "../components/common/header";

export default class AlumniDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	componentDidMount() {
		const { params } = this.props.match;
		console.log(params.id);

		if (params.id === 1) {
			this.setState({
				name: 'Akinsanya Olanrewaju',
				presentAddress: '',
				contactAddress: '',
				email: '',
				permanentAddress: '',
				academicYear: '',
				profQualification: '',
				additionalInformation: '',
				membership: '',
				briefInformation: '',
				Hobby: ''
			})
		}
	}

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
                              <h1 className="page-title">Alumni</h1>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="rs-team-single sec-spacer">
			<div className="container">
				<div className="row team">
				    <div className="col-lg-4 col-md-12">
				        <div className="team-photo mobile-mb-40">
				            <img src="images/team/team-sinlge.jpg" alt="" />
				        </div>
				    </div>
				    <div className="col-lg-8 mmt-40 col-md-12">
				        <h3 className="team-name">Md. Masud Rana</h3>
				        <p className="team-title">
				        	CEO & Founder Codeless Technology.
				        </p>
				        <p className="team-contact">
				        	<i className="icofont icofont-ui-cell-phone"></i> (+088) 2957 439 <i className="ml-15 icofont icofont-email"></i> sarlinemail@gmail.com
				        </p>
				        <p className="team-des">Vestibulum eu turpis risus. Nullam fringilla diam tellus, eu volutpat massa ullamcorper non. Nullam lorem felis, sollicitudin vitae semper sit amet, facilisis sit amet lacus. Suspendisse ut ligula varius, dignissim velit sit amet, maximus est. Etiam nec mauris augue. Ut viverra tortor orci, ac ultricies magna molestie ut</p>
                        <div className="team-icons">
                            <a href="#" title="facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#" title="twitter">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" title="google plus">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a href="#" title="linkedin">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>

						<table style={{width: "70%"}}>
							<tr>
								<td>Name:</td><td>Akinsanya Olanrewaju</td>
								<td>Present Address:</td><td>Akinsanya Olanrewaju</td>
								<td>Contact Number:</td><td>Akinsanya Olanrewaju</td>
								<td>Email Id:</td><td>Akinsanya Olanrewaju</td>
								<td>Permanent Address:</td><td>Akinsanya Olanrewaju</td>
								<td>Academic Year:</td><td>Akinsanya Olanrewaju</td>
								<td>Professional Qualification:</td><td>Akinsanya Olanrewaju</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>

      </React.Fragment>
    )
  }
}
