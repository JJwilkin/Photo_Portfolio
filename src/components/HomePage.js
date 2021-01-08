import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu.js'
import Portraits from './Portraits'
import ImageCarousel from './Carousel'
import '../stylesheets/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function HomePage() {
  return (
  
    <div className="App"> 
      <Container fluid>
        <Row > 
          <Col lg={2} >
            <div className="menu" >
              <h2>JXSHOOTER</h2>
              <div>
                <Link to="/portrait"><h2>Portrait</h2></Link>
                <Link to="/landscape"><h2>Landscape</h2></Link>
                <Link to="/street"><h2>Street</h2></Link>
              </div>
              <h2>About Me</h2>
            </div>
          </Col>
          <Col lg={8}>
            <div style={{ display:"flex", flexDirection:'column', justifyContent:'center', height:'90vh', padding:'10%'}}>
              <ImageCarousel/>
            </div>
            
          </Col>
          <Col lg={2}>
          <div className="menu" >
              <h2>JXSHOOTER</h2>
              <div>
                <h2>People</h2>
                <h2>People</h2>
                <h2>People</h2>
              </div>
              <h2>About Me</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
   
  );
}