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
  const counter = useRef(13);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 13) {
      setTimeout(() => {
        setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 2100);
    }
  };

  useEffect(() => {
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
                    marginTop: desktop ? "15vh" :"10vh",
                  }}
                >
                <h1 style={styles.title}> Collections </h1>
                  <div
                    style={{
                      display: desktop ? "block" : "none",
                      marginBottom: 30,
                    }}
                  >
                    <Fade opposite>
                      <Row>
                        <Col>
                          <Link to="/">
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Portrait
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>

                        <Col>
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Toronto
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Fade>
                  </div>
                  <div
                    style={{
                      display: desktop ? "block" : "none",
                      marginBottom: 30,
                    }}
                  >
                    <Fade opposite>
                      <Row>
                        <Col>
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Banff
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>

                        <Col>
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Landscape
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Fade>
                  </div>

                  <div style={{ display: desktop ? "none" : "block" }}>
                    <div style={{ marginBottom: 30 }}>
                      <Fade opposite>
                      <Row>
                        <Col>
                          <Link to="/">
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Portrait
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>

                        <Col>
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
                                <h3 style={{ marginLeft: 15, color: "white" }}>
                                  Toronto
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                      </Fade>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <Fade opposite>
                        <Row>
                          <Col>
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
                                  <h3
                                    style={{ marginLeft: 15, color: "white" }}
                                  >
                                    Banff
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          </Col>

                          <Col>
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
                                  <h3
                                    style={{ marginLeft: 15, color: "white" }}
                                  >
                                    Landscape
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                      </Fade>
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

        <Row style={loading ? { display: "none" } : null}>
          <Col lg={12}>
            {desktop ? null : (
              <MobileBottomNav name="Landscape" route="/landscape" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
    title: {
        fontWeight: 500,
        marginBottom:20,
        textAlign: 'center'
    }
}
