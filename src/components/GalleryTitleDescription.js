import React from "react";
import { Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import "../stylesheets/Menu.css";
import Fade from "react-reveal/Fade";



export default function GalleryTitleDescription(props) {
  const { title, description, date, color } = props;
  return (
    
      <Row className="page-title" style={{color:color, textAlign: 'left'}}>
        {/* <Col lg={4}></Col> */}
        
        <Col>
        <Fade bottom>
          <h6 className="title">{title}</h6>
          <p className=" p-style">{description}</p>
          <p className=" p-style">{date}</p>
          </Fade>
        </Col>
        {/* <Col lg={4}></Col> */}
        
      </Row>
    
  );
}
