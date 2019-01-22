import React, { Component } from 'react'

export default class Home extends Component {

    componentWillMount() {
        if (this.props.history.location.pathname === '/' || this.props.history.location.pathname === '') {
            this.setState({ isHome: true });
            console.log('isHome');
        }
    }

  render() {
    const { isHome } = this.state;
    if (!isHome) {
        // ReactDOM.findDOMNode(this.refs.["rbc-toolbar-label"]).style.display='none';
        document.querySelector('#homeSection').style.display='none';
    };

    return (
      <React.Fragment>

        <div id="rs-about" className="rs-about sec-spacer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sec-title2">
                            <span>Welcome to Goolde Memoria</span>
                            <h2>About GCETT Alumni 1968</h2>      
                        </div>
                        <div className="about-des">
                        <p>
                           
                            The college was established at Berhampore on 18th July 1927 and now under the administrative 
                            control of Directorate of Technical Education Govt Of West Bengal. In 1963 a 4 year B Sc. (Tech. ) 
                            degree was started and the degree was subsequently converted into B Tech since 1998 under the aegis 
                            of University of Calcutta In 2004, the institute was accredited by the National Board of Accreditation (NBA)
                            
                        </p>

                            <a className="primary-btn" href="/about">Read more</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    	<div className="about-image mmt-40">
                            <div className="image-list">
                                <img src="images/about/1_a.png" alt="" />
                                <img src="images/about/1_b.png" alt="" />
                            </div>
                            <img className="large" src="images/about/1.png" alt="" />
                    	</div>
                    </div>
                </div>
            </div>
        </div>

      </React.Fragment>
    )
  }
}
