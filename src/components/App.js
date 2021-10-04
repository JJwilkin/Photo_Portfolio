import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu.js";
import Portraits from "./Portraits";

import { createBrowserHistory } from "history";
import "../stylesheets/App.css";
import "../stylesheets/Hamburger.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import Toronto from "./Toronto.js";
import Collection from "./Collection.js";
import Landscape from "./Landscape.js";
import Banff from './Banff.js';
import ScrollToTop from "./ScrollToTop";
import About from "./About";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Contact from "./Contact";
import { useEffect, useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { slide as Hamburger } from "react-burger-menu";


import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-187564630-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
// const history = createBrowserHistory();

//   // Initialize google analytics page view tracking
//   history.listen((location) => {
//     ReactGA.set({ page: location.pathname }); // Update the user's current page
//     ReactGA.pageview(location.pathname); // Record a pageview for the given page
//   });
  const [showMenu, setShowMenu] = useState(false);

  const [showFade, setShowFade] = useState(false);
  const desktop = useMediaQuery("(min-width:1000px)");
  useEffect(() => {}, [showFade, showMenu]);
  
  return (
    <Router>
      <ScrollToTop />

      {desktop ? null : (
        <Hamburger
          isOpen={showMenu}
          onStateChange={(state) => {
            setShowMenu(state.isOpen);
          }}
          customBurgerIcon={
            <div>
              <HiMenuAlt4
                size={35}
                onClick={() => {
                  setShowMenu(true);
                }}
              />
            </div>
          }
        >
          <Menu setShowMenu={setShowMenu} />
        </Hamburger>
      )}

      <Switch>
        <Route exact path="/">
          <Portraits
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/landscape">
          <Landscape
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/toronto">
          <Toronto
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/banff">
          <Banff
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/collections">
          <Collection
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/about">
          <About
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
        <Route exact path="/contact">
          <Contact
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
