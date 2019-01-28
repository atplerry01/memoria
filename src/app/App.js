import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import Footer from '../components/common/footer';
import About from '../pages/about';
import Advert from '../pages/advert';
import Alumni from '../pages/alumni';
import AlumniDetail from '../pages/alumni-detail';
import BlogDetail from '../pages/blogdetail';
import Blogs from '../pages/blogs';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';
import Home from '../pages/home';
import Sponsor from '../pages/sponsors';
import Test from '../pages/_test';
import { history } from "../_helpers/history";

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
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blog/:id" exact component={BlogDetail} />
          <Route path="/test" exact component={Test} />
          <Footer />
      </React.Fragment>
      </Router>
     
    );
  }
}

export default App;
