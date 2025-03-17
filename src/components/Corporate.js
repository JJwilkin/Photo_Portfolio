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
import { PhotoProvider } from 'react-photo-view';

const folder = "./assets/corporate/"
let imageList = []
imageList = imageList.map(i => folder + i);

export default function Corporate(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 0) {
      setTimeout(() => {
        setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 1300);
    }
  };

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  useEffect(() => {
    imageLoaded()
  }, [])

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
          <Col lg={1}>
            {desktop ? (
              <Menu
                selectedOption="corporate"
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
                <div className="pad-top" style={{ display: loading ? "none" : "block" }}>
                  {/* <PageTitleDescription
                    title="CORPORATE"
                    description={`"When I think of myself, I think of Toronto. My music would never sound the way it does if it weren't for this city"`}
                    author="- Drake"
                    style={{ display: loading ? "none" : "block" }}
                  /> */}

                  <div style={{ display: desktop ? "block" : "none" }}>
                   <PhotoProvider>
                   <SingleImage
                      image={imageList[0]}
                      dimensions={[2, 8, 2]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                   </PhotoProvider>
                   
                    
                  </div>

                  <div style={{ display: desktop ? "none" : "block" }}>
                  <PhotoProvider>
                  <SingleImage
                      image={imageList[0]}
                      dimensions={[2, 9, 1]}
                      position={1}
                      onLoad={imageLoaded}
                    />
                   </PhotoProvider>
                    
                    
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
              <MobileBottomNav name="Yellowstone" route="/yellowstone" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
