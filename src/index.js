import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { history } from "./_helpers/history";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  componentWillMount() {    
    if (history.location.pathname === '/' || history.location.pathname === '') {
        this.setState({ isHome: true});
        console.log('isHome');
    }
  }

  render() {
    const { isHome } = this.state;
    if (!isHome) {
        // ReactDOM.findDOMNode(this.refs.["rbc-toolbar-label"]).style.display='none';
        document.querySelector('#homeSection').style.display='none';
    }

    return e(
      'div',
      { onClick: () => this.setState({ liked: true }) },
      ''
    );
  }
}

ReactDOM.render(
    <Router history={history}>
        <Route component={App} />
    </Router>
, document.getElementById('root'));

const sliderCont = document.querySelector('#rs-slider2');
ReactDOM.render(e(LikeButton), sliderCont);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
