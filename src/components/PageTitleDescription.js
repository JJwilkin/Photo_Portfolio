import React from "react";
import { Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import "../stylesheets/Menu.css";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";

export default function PageTitleDescription(props) {
  const { title, description, author } = props;
  return (
    
      <Row className="page-title">
        <Col></Col>
        <Col></Col>
        <Col lg={5}>
        <Fade bottom>
          <h6 className="text-align title">{title}</h6>
          <p className="text-align p-style">{description}</p>
          <p className="text-align p-style">{author}</p>
          </Fade>
        </Col>
        <Col lg={2}></Col>
      </Row>
    
  );
}
