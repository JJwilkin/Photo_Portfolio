import React from "react";
import { Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";

export default function PageTitleDescription(props) {
  const { title, description } = props;
  return (
    
      <Row className="page-title">
        <Col></Col>
        <Col></Col>
        <Col lg={5}>
        <Fade bottom>
          <h2 className="text-align">{title}</h2>
          <p className="text-align p-style">{description}</p>
          </Fade>
        </Col>
        <Col lg={1}></Col>
      </Row>
    
  );
}
