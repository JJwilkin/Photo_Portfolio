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

const folder = "./assets/portrait/"
let imageList = ["stu.jpg","stu2-min.jpg", "stu3-min.jpg","DSC_5961-min.jpg","noah1.jpg", "noah2.jpg","hooman-min.jpg", 'hooman2-min.jpg',"hooman3-min.jpg","DSC_6147-min.jpg","DSC_4589.jpg","DSC_4739.jpg","janagan1-min.jpg","janagan2-min.jpg","janagan_lamp.jpg","twins-min.jpg","grandpa1-min.jpg","jd2-min.jpg"]
imageList = imageList.map(i => folder + i);


export default function Portraits(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 16) {
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
                selectedOption="portrait"
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
                    title="PORTRAIT"
                    description='"There is one thing the photograph must contain, the humanity of the moment"'
                    author="- Robert Frank"
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
                        dimensions={[3, 6, 3]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[10], imageList[11]]}
                        dimensions={[1, 5, 1, 5]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[12], imageList[13]]}
                        dimensions={[1, 4, 1, 6]}
                        positions={[1, 3]}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[14]}
                        dimensions={[2, 6, 4]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[15]}
                        dimensions={[2, 5, 5]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <TwoImages
                        images={[imageList[16], imageList[17]]}
                        dimensions={[1, 6, 1, 4]}
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
                        images={imageList[8]}
                        dimensions={[1,5,6]}
                        positions={1}
                        onLoad={imageLoaded}
                      />
                     
                      <SingleImage
                        image={imageList[9]}
                        dimensions={[1, 5, 6]}
                        position={2}
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
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[13]}
                        dimensions={[1, 5, 6]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[14]}
                        dimensions={[1, 5, 6]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[15]}
                        dimensions={[1, 5, 6]}
                        position={2}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[16]}
                        dimensions={[1, 5, 6]}
                        position={1}
                        onLoad={imageLoaded}
                      />
                      <SingleImage
                        image={imageList[17]}
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
              <MobileBottomNav name="Toronto" route="/toronto" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
