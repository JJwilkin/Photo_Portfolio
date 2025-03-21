import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/Menu.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import Lottie from "react-lottie";
import animationData from "./loading2.json";
import ReactGA from 'react-ga';
import LoadingAnimation from "./LoadingAnimation";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function About(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setTimeout(() => {
        setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 2100);
    }
  };

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="App ">
      <Container fluid>
        <Row style={!desktop && !loading ? null : { display: "none" }}>
          <Col lg={12}>
            {desktop ? null : (
              <div>
                <Fade when={!showMenu && !loading}>
                  <Link to="/">
                    <h2
                      className="logo mobile-homepage-title"
                      style={{ textAlign: "right" }}
                    >
                      Joshua Wilkinson
                    </h2>
                  </Link>
                </Fade>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            {desktop ? (
              <Menu
                selectedOption="about"
                showFade={showFade}
                setShowFade={setShowFade}
              />
            ) : null}
          </Col>

          <Col lg={10}>
            <Row style={desktop ? { height: "100vh" } : null}>
              <Col className="center-content" lg={12}>
                <Fade opposite>
                  <div
                    style={{ display: loading ? "flex" : "none" }}
                    className="max-height center-content"
                  >
                    <LoadingAnimation />
                  </div>
                </Fade>

                <Fade>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Row style={{ marginTop: 25 }}>
                      <Col></Col>
                      <Col lg={4}>
                        <img
                          className="d-block w-100"
                          src="./assets/joshua2.jpg"
                          alt="First slide"
                          onLoad={imageLoaded}
                        />
                      </Col>
                      <Col lg={6}>
                        <Fade bottom>
                          {/* <p className="left-align">About</p> */}
                          <h3 className="left-align">I'm Josh</h3>
                          <p className="left-align small-text">
                            I "began" photography in the Christmas of 2015 at the age of 15 when I
                            got my first DSLR camera. It was a cheap Nikon with
                            a kit lens and I shot on Auto for the first 6
                            months. My pictures were...interesting. But despite that,
                            I couldn't deny the satisfaction of capturing a
                            moment in time. Over the years, I learned new
                            techniques, practiced on friends, learned theory, studied composition, and played with colors. 
                            It was like a snowball, the more I learned the more I wanted to learn. 
                            </p>

                            <p className="left-align small-text">
                            And after all these years I've learned as much about myself as I have about photography. Photography has taught me
                            time and time again the importance of humility and nurturing the child-like curiosity to learn and take risks.
                            Too often we fall into the "I've always done it this way" trap of thinking, and we stagnate. It's only when 
                            we speak with a younger nephew, a toddler, or child that we are reminded of this burning curiosity we once had.
                            That's just my two cents on all of this.
                            </p>

                            <p className="left-align small-text">
                            
                            Please feel free reach out to me over the phone or instagram and we
                            can make some great work! Lastly, if I had to choose a quote
                            to describe how I view photography it would be this:
                          </p>
                          <p>
                            "You are always a student, never a master. You have
                            to keep moving forward."{" "}
                          </p>
                          <p>- Conrad Hall</p>
                        </Fade>
                      </Col>
                      
                      <Col></Col>
                    </Row>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu
              selectedOption="about"
              showFade={showFade}
              setShowFade={setShowFade}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
