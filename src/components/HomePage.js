import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu.js'
import Portraits from './Portraits'
import ImageCarousel from './Carousel'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fade from 'react-reveal/Fade';

import '../stylesheets/HomePage.css';
import '../index.css';

export default function HomePage() {
  return (
    <div className="App"> 
    
      <Container fluid>
        <Row> 
          <Col lg={2}  >
            <div className="menu" >
            <Fade bottom>
              <h2 className="logo">jxshooter</h2>
              </Fade>
              <Fade bottom>
              <div>
                <table>
                  <tr><Link to="/portrait">
                    <td className="num-col">01</td>
                    <td><h6>PORTRAIT</h6></td>
                  </Link></tr>
                  <tr><Link to="/landscape">
                    <td className="num-col" >02</td>
                    <td><h6>LANDSCAPE</h6></td>
                  </Link></tr>
                  <tr><Link to="/street">
                    <td className="num-col">03</td>
                    <td><h6>STREET</h6></td>
                  </Link></tr>
                </table>
              </div>
              </Fade>
             
              <Fade bottom>
                <h6>About Me &nbsp;&#10230;</h6>
              {/* <svg width="100" height="100">
                <circle cx="50" cy="50" r="42" stroke="white" stroke-width="2" fill="black"/>
                <text x="43%" y="50%" text-anchor="middle" stroke="white" fill="white" stroke-width="0.8px" font-size="15px" dy="-5px">About</text>
                <text x="45%" y="50%" text-anchor="middle" stroke="white" fill="white" stroke-width="1px" font-size="15px" dy="15px">Me&nbsp;&nbsp;&#8594;</text>
              </svg>  */}
              </Fade>
              
            </div>
          </Col>
          
          <Col lg={8} className="carousel-col">
            <div className="carousel-container">
              <ImageCarousel/>
             
            </div>
            <p className="copyright">&#169;&nbsp;JXSHOOTER</p>
            <p className="category-title">PORTRAITS PLACEHOLDER TEXT</p>
          </Col>
          <Col className="last-col" lg={2}>
            <h6 className="contact">Contact for Collaboration &nbsp;+</h6>
          </Col>
        </Row>
      </Container>
    </div>
   
  );
}