import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { Link } from "react-router-dom";
import PageTitleDescription from "./PageTitleDescription";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import LoadingAnimation from "./LoadingAnimation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "react-reveal/Fade";
import MobileBottomNav from "./MobileBottomNav";
import ReactGA from 'react-ga';

export default function Banff(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 10) {
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
                selectedOption="banff"
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
                  
                  
                  <div className={{ display: desktop ? "block" : "none" , maxWidth:300}}>
                  <PageTitleDescription
                    title="BANFF"
                    description='"Look deep into nature, and you will understand everything better."'
                    author="- Albert Einstein"
                      style={{ display: loading ? "none" : "block" }}
                  />
                      
                      
                      <TwoImages
                        images={["./assets/banff/louise.jpg", "./assets/banff/fisherman.jpg"]}
                        dimensions={[2, 4, 4, 2]}
                        positions={[1, 2]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/blackfalls.jpg"
                        dimensions={[4, 4,4 ]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      
                      <TwoImages
                        images={["./assets/banff/elk2.jpg", "./assets/banff/elk1.jpg"]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/blueMountain.jpg"
                        dimensions={[3, 6, 3]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={["./assets/banff/forest1.jpg", "./assets/banff/forest2.jpg"]}
                        dimensions={[2, 4, 2, 4]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={["./assets/banff/shadow2.jpg", "./assets/banff/shadow.jpg"]}
                        dimensions={[2, 4, 2, 4]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/moose3.jpg"
                        dimensions={[3, 5, 4]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                    </div>
                  
                    <div style={{ display: desktop ? "none" : "block" }}> 
                      <SingleImage
                        image="./assets/banff/louise.jpg"
                        dimensions={[2, 9, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/fisherman.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/blackfalls.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/elk2.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/elk1.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/blueMountain.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        images="./assets/banff/forest1.jpg"
                        dimensions={[1,5,6]}
                        positions={1}
                        onLoad={imageLoaded}
                      />
                     
                      <SingleImage
                        image="./assets/banff/forest2.jpg"
                        dimensions={[1, 5, 6]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/shadow2.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/shadow.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/banff/moose3.jpg"
                        dimensions={[1, 5, 6]}
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
            {desktop ? null : <MobileBottomNav name="Portrait" route="/" />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


let styles = {
  imageSection: {
    maxWidth: 800
  }
}