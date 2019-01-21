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
                            <span>Welcome to Eventsia</span>
                            <h2>About The Event Organizer</h2>      
                        </div>
                        <div className="about-des">
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.</p>
                            <a className="primary-btn" href="about.html">Read more</a>
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
