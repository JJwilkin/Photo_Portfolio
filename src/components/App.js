import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu.js";
import Portraits from "./Portraits";
import ImageCarousel from "./Carousel";
import "../stylesheets/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import Street from "./Street.js";
import Landscape from "./Landscape.js";
import ScrollToTop from "./ScrollToTop";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Portraits firstLoad={firstLoad} setFirstLoad={setFirstLoad} />
        </Route>
        <Route exact path="/portrait">
          <Portraits />
        </Route>
        <Route exact path="/landscape">
          <Landscape />
        </Route>
        <Route exact path="/street">
          <Street />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
