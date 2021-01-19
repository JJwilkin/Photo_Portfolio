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
import ReactGA from 'react-ga';

export default function Toronto(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
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

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

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
          <Col lg={1}>
            {desktop ? (
              <Menu
                selectedOption="toronto"
                showFade={showFade}
                setShowFade={setShowFade}
              />
            ) : null}
          </Col>

          <Col lg={10}>
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
                <div style={{ display: loading ? "none" : "block" }}>
                  <PageTitleDescription
                    title="TORONTO"
                    description={`"When I think of myself, I think of Toronto. My music would never sound the way it does if it weren't for this city"`}
                    author="- Drake"
                    style={{ display: loading ? "none" : "block" }}
                  />

                  <div style={{ display: desktop ? "block" : "none" }}>
                    <SingleImage
                      image="./assets/toronto/toronto-polson.jpg"
                      dimensions={[2, 9, 1]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <TwoImages
                      images={[
                        "./assets/toronto/toronto8.jpg",
                        "./assets/toronto/toronto7.jpg",
                      ]}
                      dimensions={[1, 5, 1, 5]}
                      positions={[1, 3]}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto2.jpg"
                      dimensions={[6, 5, 1]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto9.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <TwoImages
                      images={[
                        "./assets/toronto/toronto3.jpg",
                        "./assets/toronto/toronto.jpg",
                      ]}
                      dimensions={[1, 6, 1, 4]}
                      positions={[1, 3]}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto4.jpg"
                      dimensions={[4, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <TwoImages
                      images={[
                        "./assets/toronto/james4-min.jpg",
                        "./assets/toronto/james2.jpg",
                      ]}
                      dimensions={[1, 4, 1, 6]}
                      positions={[1, 3]}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto12.jpg"
                      dimensions={[2, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto5.jpg"
                      dimensions={[5, 5, 2]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto10.jpg"
                      dimensions={[2, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                  </div>

                  <div style={{ display: desktop ? "none" : "block" }}>
                    <SingleImage
                      image="./assets/toronto/toronto-polson.jpg"
                      dimensions={[2, 9, 1]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto8.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto7.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto2.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto9.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto3.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto4.jpg"
                      dimensions={[1, 5, 6]}
                      position={2}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/james4-min.jpg"
                      dimensions={[1, 5, 6]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      images="./assets/toronto/james2.jpg"
                      dimensions={[1, 5, 6]}
                      positions={1}
                      onLoad={imageLoaded}
                    />

                    <SingleImage
                      image="./assets/toronto/toronto12.jpg"
                      dimensions={[2, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto5.jpg"
                      dimensions={[2, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                    <SingleImage
                      image="./assets/toronto/toronto10.jpg"
                      dimensions={[2, 5, 3]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu showFade={showFade} setShowFade={setShowFade} />
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
