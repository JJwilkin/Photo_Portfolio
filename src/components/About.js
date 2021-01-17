import React, { useRef, useState } from "react";
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
  return (
    <div className="App ">
      <Container fluid>
      <Row style={!desktop && !loading ? null: {display:'none'}}>
          <Col lg={12}>
            {desktop ? null : (
              <div>
                <Fade when={!showMenu && !loading}>
                  <Link to="/">
                    <h2
                      className="logo mobile-homepage-title"
                      style={{ textAlign: "right" }}
                    >
                      jxshooter
                    </h2>
                  </Link>
                </Fade>
              </div>
            )}
          </Col>
        </Row>
        <Row >
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
            <Row style={{ height: "100vh" }}>
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
                    <Row>
                      <Col></Col>

                      
                      <Col lg={5}>
                        <Fade bottom>
                          {/* <p className="left-align">About</p> */}
                          <h3 className="left-align">I'm Josh</h3>
                          <p className="left-align">
                            Landscape photography shows spaces within the world,
                            sometimes vast and unending, but other times
                            microscopic. Landscape photography shows spaces
                            within the world, sometimes vast and unending, but
                            other times microscopic.
                          </p>
                       
                        </Fade>
                      </Col>
                      <Col lg={4}>
                        <img
                          className="d-block w-100"
                          src="./assets/joshua2.jpg"
                          alt="First slide"
                          onLoad={imageLoaded}
                        />
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
