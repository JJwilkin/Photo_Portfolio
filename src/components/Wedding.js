import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import "../stylesheets/Hamburger.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageTitleDescription from "./PageTitleDescription";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import LoadingAnimation from "./LoadingAnimation";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import MobileBottomNav from "./MobileBottomNav";
import ReactGA from 'react-ga';

const folder = "./assets/wedding/"
let imageList = ["DSC_5562.jpg","DSC_5602.jpg","DSC_5640.jpg","DSC_5650.jpg","DSC_5472.jpg", "DSC_5616-2.jpg","DSC_3974.jpg", "DSC_5653.jpg","DSC_5498.jpg","DSC_5671.jpg","DSC_5696.jpg","DSC_5740-2.jpg","DSC_5589.jpg","DSC_5554.jpg", "DSC_5562.jpg"]
imageList = imageList.map(i => folder + i);

export default function Wedding(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 14) {
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
                selectedOption="wedding"
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
                    title="WEDDINGS"
                    description='"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."'
                    author="- Dr.Seuss"
                    style={{ display: loading ? "none" : "block" }}
                  />
                  
                    <div style={{ display: desktop ? "block" : "none" }}>
                      <SingleImage
                        image={imageList[0]}
                        dimensions={[2, 8, 2]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[1], imageList[2]]}
                        dimensions={[1, 5, 1, 5]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[3]}
                        dimensions={[3, 6, 3]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[4], imageList[5]]}
                        dimensions={[1, 5, 1, 5]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[6]}
                        dimensions={[5, 6, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[7], imageList[8]]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      
                      <SingleImage
                        image={imageList[9]}
                        dimensions={[1, 10, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[10], imageList[11]]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[12]}
                        dimensions={[2, 6, 4]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[13], imageList[14]]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                    </div>
                  
                    <div style={{ display: desktop ? "none" : "block" }}> 
                      <SingleImage
                        image={imageList[0]}
                        dimensions={[2, 9, 1]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[1]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[2]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[3]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[4]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[5]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[6]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[7]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[8]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[9]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[10]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[11]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[12]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[13]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[14]}
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
            {desktop ? null : (
              <MobileBottomNav name="Portrait" route="/portrait" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
