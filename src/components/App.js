import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu.js";
import Portraits from "./Portraits";
import Wedding from "./Wedding";
import Families from "./Families.js";
import { createBrowserHistory } from "history";
import "../stylesheets/App.css";
import "../stylesheets/Hamburger.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import Corporate from "./Corporate.js";
import Collection from "./Collection.js";
import Yellowstone from "./Yellowstone.js";
import Banff from './Banff.js';
import ScrollToTop from "./ScrollToTop";
import About from "./About";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Contact from "./Contact";
import ImageGallery from './ImageGallery';
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
  const [theme, setTheme] = useState("dark")
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
                color={theme === "dark" ? "white" : "black"}
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
          <Collection
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/weddings">
          <Wedding
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/families">
          <Families
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/portrait">
          <Portraits
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/yellowstone">
          <Yellowstone
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/corporate">
          <Corporate
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/banff">
          <Banff
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/gallery">
          <ImageGallery
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}
          />
        </Route>
        <Route exact path="/about">
          <About
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
        <Route exact path="/contact">
          <Contact
            showFade={showFade}
            setShowFade={setShowFade}
            showMenu={showMenu}
            setTheme={setTheme}

          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
