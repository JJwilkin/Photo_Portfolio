import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import PageTitleDescription from "./PageTitleDescription";
import RightMenu from "./RightMenu";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import LoadingAnimation from "./LoadingAnimation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileBottomNav from "./MobileBottomNav";
import ReactGA from "react-ga";
import "./Collection.css";
import CollectionDesktop from "./Collections/Collection_Desktop";
import CollectionMobile from "./Collections/Collection_Mobile";

export default function Collection(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(1);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 4) {
      setTimeout(() => {
        setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 1300);
    }
  };

  // useEffect(() => {
  //   let img1 = new Image();
  //   let img2 = new Image();
  //   let img3 = new Image();
  //   let img4 = new Image();
  //   img1.src = `url(${"./assets/portrait/stu.jpg"})`;
  //   img2.src = `url(${"./assets/toronto/toronto11.jpg"})`;
  //   img3.src = `url(${"./assets/landscape/DSC_2083-2.jpg"})`;
  //   img4.src = `url(${"./assets/banff/blueMountain.jpg"})`;

  //   imageLoaded();
  // }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="App">
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
          <Col lg={2}>
            {desktop ? (
              <Menu
                selectedOption="collections"
                showFade={showFade}
                setShowFade={setShowFade}
              />
            ) : null}
          </Col>

          <Col lg={8}>
            <Row>
              <Col className="main-content" lg={12}>
                <Fade opposite>
                  <div
                    style={{ display: loading ? "flex" : "none" }}
                    className="max-height center-content"
                  >
                    <LoadingAnimation />
                  </div>
                </Fade>
                <div
                  style={{
                    display: loading ? "none" : "block",
                    marginTop: desktop ? "18vh" : "10vh",
                  }}
                >
                  {/* <Fade bottom>
                    <h3
                      style={{
                        textAlign: "left",
                        fontSize: desktop ? 22 : 27,
                        marginBottom: 8,
                      }}
                    >
                      {" "}
                      Hey, I'm Josh !{" "}
                    </h3>
                    <p style={{ marginBottom: 20, fontSize: 13 }}>
                      Welcome to my portfolio. I'm a Toronto based photographer and software developer
                      with a passion for capturing the beauty in people and nature;
                      using my pictures to tell their story. Let's create together!{" "}
                    </p>
                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>
                      <Link to="/contact">
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 3,
                            marginRight: 30,
                            textDecoration: "overline",
                            fontSize: 12,
                          }}
                        >
                          Contact
                        </p>
                      </Link>
                      <Link to="/about">
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: 3,
                            marginBottom: 30,
                            textDecoration: "overline",
                            fontSize: 12,
                          }}
                        >
                          About
                        </p>
                      </Link>
                    </div>

                  </Fade> */}
                  <CollectionDesktop imageLoaded={imageLoaded}/>
                   <CollectionMobile imageLoaded={imageLoaded} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={1}>
            {!desktop ? null : (
              <RightMenu showFade={showFade} setShowFade={setShowFade} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
