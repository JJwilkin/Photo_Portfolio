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
            {desktop ? null : <MobileBottomNav name="Street" route="/street" />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
