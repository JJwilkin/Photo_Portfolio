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
import { PhotoProvider } from 'react-photo-view';

const folder = "./assets/families/"
let imageList = ["DSC_4512.jpg","DSC_4419.jpg","DSC_4687.jpg","DSC_4768.jpg","DSC_4782.jpg","DSC_4812.jpg","DSC_4819.jpg","DSC_4857.jpg",'DSC_4883.jpg',"DSC_4919.jpg"]
imageList = imageList.map(i => folder + i);

export default function Families(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= imageList.length) {
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
                selectedOption="families"
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
                    title="FAMILIES"
                    description='"When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends."'
                    author="- Barbara Bush"
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
                      <TwoImages
                        images={[imageList[1], imageList[2]]}
                        dimensions={[1, 5, 1, 5]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[3]}
                        dimensions={[2, 8, 2]}
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
                        dimensions={[4, 6, 2]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[7], imageList[8]]}
                        dimensions={[1, 6, 1, 4]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      
                      <SingleImage
                        image={imageList[9]}
                        dimensions={[1, 10, 1]}
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
              <MobileBottomNav name="Portrait" route="/portrait" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
