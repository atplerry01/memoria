import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import { history } from "../_helpers/history";
import About from '../pages/about';
import Home from '../pages/home';
import Alumni from '../pages/alumni';
import Contact from '../pages/contact';
import Sponsor from '../pages/sponsors';
import Gallery from '../pages/gallery';
import Footer from '../components/common/footer';
import AlumniDetail from '../pages/alumni-detail';
import Advert from '../pages/advert';

class App extends Component {
  render() {
    return (
      <Router history={history} {...this.state}>
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/sponsors" exact component={Sponsor} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/alumni" exact component={Alumni} />
          <Route path="/alumni/:id" exact component={AlumniDetail} />
          <Route path="/adverts" exact component={Advert} />
          <Footer />
      </React.Fragment>
      </Router>
     
    );
  }
}

export default App;
