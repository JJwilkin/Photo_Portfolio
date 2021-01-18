import React, { useState, useRef } from "react";
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
export default function Landscape(props) {
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

  function showSettings(event) {
    event.preventDefault();
  }

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
                selectedOption="landscape"
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
                    title="LANDSCAPE"
                    description='"Landscape photography is the supreme test of the photographer - and often the supreme disappointment."'
                    author="- Ansel Adams"
                      style={{ display: loading ? "none" : "block" }}
                  />
                  
                  <div style={{ display: desktop ? "block" : "none" }}>
                      <SingleImage
                        image="./assets/landscape/DSC_2145-2.jpg"
                        dimensions={[2, 9, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={["./assets/landscape/DSC_2078.jpg", "./assets/landscape/DSC_2087.jpg"]}
                        dimensions={[1, 5, 1, 5]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2297.jpg"
                        dimensions={[1, 10,1 ]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      
                      <TwoImages
                        images={["./assets/landscape/DSC_1832.jpg", "./assets/landscape/DSC_1861-2.jpg"]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2958.jpg"
                        dimensions={[1, 10, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_1911-2.jpg"
                        dimensions={[2, 6, 4]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2001-2.jpg"
                        dimensions={[4, 7, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={["./assets/landscape/DSC_8398.jpg", "./assets/landscape/DSC_8371-3.jpg"]}
                        dimensions={[1, 6, 1, 4]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2083-2.jpg"
                        dimensions={[3, 8, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                    </div>
                  
                    <div style={{ display: desktop ? "none" : "block" }}> 
                      <SingleImage
                        image="./assets/landscape/DSC_2145-2.jpg"
                        dimensions={[2, 9, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2078.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2087.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2297.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2958.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_1832.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        images="./assets/landscape/DSC_1861-2.jpg"
                        dimensions={[1,5,6]}
                        positions={1}
                        onLoad={imageLoaded}
                      />
                     
                      <SingleImage
                        image="./assets/landscape/DSC_1911-2.jpg"
                        dimensions={[1, 5, 6]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2001-2.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_8398.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_8371-3.jpg"
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image="./assets/landscape/DSC_2083-2.jpg"
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
