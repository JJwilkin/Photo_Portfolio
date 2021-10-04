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

export default function Collection(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(1);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 0) {
      setTimeout(() => {
        setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 1800);
    }
  };

  useEffect(() => {
    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let img4 = new Image();
    img1.src = `url(${"./assets/portrait/stu.jpg"})`;
    img2.src = `url(${"./assets/toronto/toronto11.jpg"})`;
    img3.src = `url(${"./assets/landscape/DSC_2083-2.jpg"})`;
    img4.src = `url(${"./assets/banff/blueMountain.jpg"})`;
    
    imageLoaded();
  }, []);

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
                      jxshooter
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
                    marginTop: desktop ? "15vh" : "10vh",
                  }}
                >
                  <Fade bottom>
                    <h3
                      style={{
                        textAlign: "left",
                        fontSize: desktop ? 45 : 35,
                        marginBottom: 5,
                      }}
                    >
                      {" "}
                      Hey, I'm Josh 👋{" "}
                    </h3>
                    <p style={{ marginBottom: 20, fontSize: 18 }}>
                      Welcome to my portfolio! I'm a Toronto based photographer
                      with a passion for capturing beauty in people and nature;
                      using pictures to tell their story.{" "}
                    </p>
                    <Link to="/contact">
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: 20,
                          marginBottom: 30,
                          textDecoration: "underline",
                        }}
                      >
                        Contact Me +
                      </p>
                    </Link>
                  </Fade>
                  <div
                    style={{
                      display: desktop ? "block" : "none",
                      marginBottom: 30,
                    }}
                  >
                    <Row>
                     
                        <Col>
                        <Fade opposite>
                          <Link to="/portrait">
                            <div
                              style={{
                                backgroundImage: `url(${"./assets/portrait/stu.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "30vh",
                              }}
                            >
                              <div className="image-tile">
                                <div
                                  style={{
                                    fontSize: 35,

                                    color: "white",
                                    position: "absolute",
                                    bottom: 10,
                                    left: 20,
                                  }}
                                >
                                  Portrait
                                </div>
                              </div>
                            </div>
                          </Link>
                          </Fade>
                        </Col>
                      
                      
                        <Col>
                        <Fade opposite>
                          <Link to="/toronto">
                            <div
                              style={{
                                backgroundImage: `url(${"./assets/toronto/toronto11.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "30vh",
                              }}
                            >
                              <div className="image-tile">
                                <div
                                  style={{
                                    fontSize: 35,

                                    color: "white",
                                    position: "absolute",
                                    bottom: 10,
                                    left: 20,
                                  }}
                                >
                                  Toronto
                                </div>
                              </div>
                            </div>
                          </Link>
                          </Fade>
                        </Col>
                      
                    </Row>
                  </div>
                  <div
                    style={{
                      display: desktop ? "block" : "none",
                    }}
                  >
                    <Row>
                      
                        <Col style={{ marginBottom: 30 }}>
                        <Fade opposite>
                          <Link to="/banff">
                            <div
                              style={{
                                backgroundImage: `url(${"./assets/banff/blueMountain.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "30vh",
                              }}
                            >
                              <div className="image-tile">
                                <div
                                  style={{
                                    fontSize: 35,

                                    color: "white",
                                    position: "absolute",
                                    bottom: 10,
                                    left: 20,
                                  }}
                                >
                                  Banff
                                </div>
                              </div>
                            </div>
                          </Link>
                          </Fade>
                        </Col>
                      
                      
                        <Col style={{ marginBottom: 30 }}>
                        <Fade opposite>
                          <Link to="/landscape">
                            <div
                              style={{
                                backgroundImage: `url(${"./assets/landscape/DSC_2083-2.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "30vh",
                              }}
                            >
                              <div className="image-tile">
                                <div
                                  style={{
                                    fontSize: 35,

                                    color: "white",
                                    position: "absolute",
                                    bottom: 10,
                                    left: 20,
                                  }}
                                >
                                  Landscape
                                </div>
                              </div>
                            </div>
                          </Link>
                          </Fade>
                        </Col>
                      
                    </Row>
                  </div>

                  <div style={{ display: desktop ? "none" : "block" }}>
                    <div>
                      
                        <Row>
                          <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/portrait">
                              <div
                                style={{
                                  backgroundImage: `url(${"./assets/portrait/stu.jpg"})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  height: "30vh",
                                }}
                              >
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Portrait
                                  </div>
                                </div>
                              </div>
                            </Link>
                            </Fade>
                          </Col>

                          <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/toronto">
                              <div
                                style={{
                                  backgroundImage: `url(${"./assets/toronto/toronto11.jpg"})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  height: "30vh",
                                }}
                              >
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Toronto
                                  </div>
                                </div>
                              </div>
                            </Link>
                            </Fade>
                          </Col>
                        </Row>
                      
                    </div>
                    <div>
                      
                        <Row>
                          <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/banff">
                              <div
                                style={{
                                  backgroundImage: `url(${"./assets/banff/blueMountain.jpg"})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  height: "30vh",
                                }}
                              >
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Banff
                                  </div>
                                </div>
                              </div>
                            </Link>
                            </Fade>
                          </Col>

                          <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/landscape">
                              <div
                                style={{
                                  backgroundImage: `url(${"./assets/landscape/DSC_2083-2.jpg"})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  height: "30vh",
                                }}
                              >
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Landscape
                                  </div>
                                </div>
                              </div>
                            </Link>
                            </Fade>
                          </Col>
                        </Row>
                     
                    </div>
                  </div>
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
