import React, { Component } from 'react';
import Header from "../components/common/header";

export default class AlumniDetail extends Component {
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

      <div class="rs-team-single sec-spacer">
			<div class="container">
				<div class="row team">
				    <div class="col-lg-4 col-md-12">
				        <div class="team-photo mobile-mb-40">
				            <img src="images/team/team-sinlge.jpg" alt="" />
				        </div>
				    </div>
				    <div class="col-lg-8 mmt-40 col-md-12">
				        <h3 class="team-name">Md. Masud Rana</h3>
				        <p class="team-title">
				        	CEO & Founder Codeless Technology.
				        </p>
				        <p class="team-contact">
				        	<i class="icofont icofont-ui-cell-phone"></i> (+088) 2957 439 <i class="ml-15 icofont icofont-email"></i> sarlinemail@gmail.com
				        </p>
				        <p class="team-des">Vestibulum eu turpis risus. Nullam fringilla diam tellus, eu volutpat massa ullamcorper non. Nullam lorem felis, sollicitudin vitae semper sit amet, facilisis sit amet lacus. Suspendisse ut ligula varius, dignissim velit sit amet, maximus est. Etiam nec mauris augue. Ut viverra tortor orci, ac ultricies magna molestie ut</p>
                        <div class="team-icons">
                            <a href="#" title="facebook">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#" title="twitter">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#" title="google plus">
                                <i class="fa fa-google-plus"></i>
                            </a>
                            <a href="#" title="linkedin">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </div>
				        <div class="team-skill">
					        <h3 class="skill-title">Speakers Skill:</h3>
					        <div class="row">
					        	<div class="col-md-6">
					        		<div class="progress rs-progress">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
											<span class="pb-label">English Speak</span>
											<span class="pb-percent">95%</span>
										</div>
			                		</div>
			                		<div class="progress rs-progress">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
											<span class="pb-label">China Speak</span>
											<span class="pb-percent">85%</span>
										</div>
			                		</div>
					        	</div>
					        	<div class="col-md-6">
					        		<div class="progress rs-progress">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width:"88%"}}>
											<span class="pb-label">Hindi Speak</span>
											<span class="pb-percent">88%</span>
										</div>
			                		</div>
			                		<div class="progress rs-progress">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
											<span class="pb-label">Other Speak</span>
											<span class="pb-percent">75%</span>
										</div>
			                		</div>
					        	</div>
					        </div>
				        </div>
				    </div>
				</div>
			</div>
		</div>

      </React.Fragment>
    )
  }
}
