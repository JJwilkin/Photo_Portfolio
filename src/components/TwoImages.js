import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Row, Col } from "react-bootstrap";
import "../stylesheets/PicturePage.css";
import "../stylesheets/HomePage.css";

export default function TwoImages(props) {
  let { images, dimensions, positions } = props;
  let imagePosition = [null, null, null, null];
  imagePosition[positions[0]] = (
    <img className="d-block w-100" src={images[0]} alt="First slide" />
  );
  imagePosition[positions[1]] = (
    <img className="d-block w-100" src={images[1]} alt="First slide" />
  );

  return (
    <Fade  cascade>
      <Row className="picture-spacing">
        <Col lg={dimensions[0]}>{imagePosition[0]}</Col>
        <Col lg={dimensions[1]}>{imagePosition[1]}</Col>
        <Col lg={dimensions[2]}>{imagePosition[2]}</Col>
        <Col lg={dimensions[3]}>{imagePosition[3]}</Col>
      </Row>
    </Fade>
  );
}
