import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageTitleDescription from './PageTitleDescription'
import Menu from "./Menu";
import RightMenu from "./RightMenu"
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";

export default function Portraits() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={1}>
            <Menu selectedOption="portrait"/>
          </Col>

          <Col lg={10}>
            <Row>
              <Col className="main-content" lg={12}>
              <PageTitleDescription
                  title="Portrait"
                  description="Landscape photography shows spaces within the world,
                      sometimes vast and unending, but other times microscopic."
                />
                <SingleImage
                  image="./assets/rock.jpg"
                  dimensions={[1, 10, 1]}
                  position={1}
                />
                <TwoImages
                  images={["./assets/rock.jpg", "./assets/toronto.jpg"]}
                  dimensions={[1, 5, 1, 5]}
                  positions={[1, 3]}
                />
                <TwoImages
                  images={["./assets/toronto.jpg", "./assets/rock.jpg"]}
                  dimensions={[1, 4, 6, 1]}
                  positions={[1, 2]}
                />
                <SingleImage
                  image="./assets/rock.jpg"
                  dimensions={[1, 3, 8]}
                  position={2}
                />
                <SingleImage
                  image="./assets/rock.jpg"
                  dimensions={[1, 8, 3]}
                  position={1}
                />
                <SingleImage
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
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu selectedOption="landscape"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
