import React, { useState, useRef } from "react";
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

import Fade from "react-reveal/Fade";
export default function Portraits(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade, setShowFade } = props;
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 7) {
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
                    title="Portrait"
                    description="Landscape photography shows spaces within the world,
                      sometimes vast and unending, but other times microscopic."
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <SingleImage
                    image="./assets/stu.jpg"
                    dimensions={[2, 9, 1]}
                    position={1}
                    onLoad={imageLoaded}
                  />
                  <TwoImages
                    images={["./assets/stu2.jpg", "./assets/stu3.jpg"]}
                    dimensions={[1, 5, 1, 5]}
                    positions={[1, 3]}
                    onLoad={imageLoaded}
                  />
                  <TwoImages
                    images={["./assets/toronto.jpg", "./assets/james.jpg"]}
                    dimensions={[1, 4, 6, 1]}
                    positions={[1, 2]}
                    onLoad={imageLoaded}
                  />
                  <SingleImage
                    image="./assets/toronto2.jpg"
                    dimensions={[1, 5, 6]}
                    position={2}
                    onLoad={imageLoaded}
                  />
                  <SingleImage
                    image="./assets/james3.jpg"
                    dimensions={[1, 5, 6]}
                    position={1}
                    onLoad={imageLoaded}
                  />
                  {/* <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 2, 9]}
                    position={2}
                   
                  />
                  <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 8, 3]}
                    position={1}
                   
                  />
                  <TwoImages
                    images={["./assets/rock.jpg", "./assets/toronto.jpg"]}
                    dimensions={[1, 7, 1, 3]}
                    positions={[1, 3]}
                    
                  /> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu
              selectedOption="landscape"
              showFade={showFade}
              setShowFade={setShowFade}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
