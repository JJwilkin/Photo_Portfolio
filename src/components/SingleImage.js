import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Row, Col } from "react-bootstrap";
import "../stylesheets/PicturePage.css";
import "../stylesheets/HomePage.css";

export default function SingleImage(props) {
  let { image, dimensions, position, onLoad } = props;
  let imagePosition = [null, null, null];
  imagePosition[position] = (
    <img className="d-block w-100" onLoad={onLoad} src={image} alt="First slide" />
  );

  return (
    <Fade>
      <Row className="picture-spacing">
        <Col lg={dimensions[0]}>{imagePosition[0]}</Col>
        <Col lg={dimensions[1]}>{imagePosition[1]}</Col>
        <Col lg={dimensions[2]}>{imagePosition[2]}</Col>
      </Row>
    </Fade>
  );
}
