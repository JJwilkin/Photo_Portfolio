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
import { useEffect, useState } from "react";

function App() {
  const [showFade, setShowFade] = useState(false);
  useEffect(()=>{},[showFade])
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Portraits showFade={showFade} setShowFade={setShowFade}/>
        </Route>
        <Route exact path="/landscape">
          <Landscape showFade={showFade} setShowFade={setShowFade}/>
        </Route>
        <Route exact path="/street">
          <Street showFade={showFade} setShowFade={setShowFade}/>
        </Route>
        <Route exact path="/about">
          <About showFade={showFade} setShowFade={setShowFade}/>
        </Route>
        <Route exact path="/contact">
          <Contact showFade={showFade} setShowFade={setShowFade}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
