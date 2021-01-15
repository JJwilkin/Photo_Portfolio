import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageTitleDescription from "./PageTitleDescription";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import cacheImages from "../services/cacheImages";
import animationData from "./loading2.json";
import Lottie from "react-lottie";
export default function Portraits(props) {
  const { firstLoad, setFirstLoad } = props;
  // const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 5) {
      setTimeout(()=> setLoading(false), 3500)
      
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (firstLoad) {
      const imgs = [
        "./assets/joshua4.jpg",
        "./assets/james3.jpg",
        "./assets/rock.jpg",
        "./assets/toronto.jpg",
      ];
      cacheImages(imgs, setFirstLoad);
    }
  }, []);
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={1}>
            <Menu selectedOption="portrait" />
          </Col>

          <Col lg={10}>
            <Row>
              <Col className="main-content" lg={12}>
                <div
                  style={{ display: loading ? "flex" : "none" }}
                  className="max-height center-content"
                >
                  <Lottie options={defaultOptions} height={400} width={400} />
                </div>

                <div >
                  <PageTitleDescription
                    title="Portrait"
                    description="Landscape photography shows spaces within the world,
                      sometimes vast and unending, but other times microscopic."
                      style={{ display: loading ? "none" : "block" }}
                  />
                  <SingleImage
                    image="./assets/stu.jpg"
                    dimensions={[1, 10, 1]}
                    position={1}
                    onLoad={imageLoaded}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <TwoImages
                    images={["./assets/stu2.jpg", "./assets/stu3.jpg"]}
                    dimensions={[1, 5, 1, 5]}
                    positions={[1, 3]}
                    onLoad={imageLoaded}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <TwoImages
                    images={["./assets/toronto.jpg", "./assets/james.jpg"]}
                    dimensions={[1, 4, 6, 1]}
                    positions={[1, 2]}
                    onLoad={imageLoaded}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  {/* <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 3, 8]}
                    position={2}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 8, 3]}
                    position={1}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 2, 9]}
                    position={2}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <SingleImage
                    image="./assets/rock.jpg"
                    dimensions={[1, 8, 3]}
                    position={1}
                    style={{ display: loading ? "none" : "block" }}
                  />
                  <TwoImages
                    images={["./assets/rock.jpg", "./assets/toronto.jpg"]}
                    dimensions={[1, 7, 1, 3]}
                    positions={[1, 3]}
                    style={{ display: loading ? "none" : "block" }}
                  /> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu selectedOption="landscape" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
