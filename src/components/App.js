import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu.js'
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App"> 
      <Container fluid>
        <Row>
          <Col>
            {/* put menu stuff here idt you acc need a menu component */}
          </Col>
          <Col lg={6}>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
