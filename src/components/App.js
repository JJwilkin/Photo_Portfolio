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
import HomePage from './HomePage.js';
import Street from './Street.js';
import Landscape from './Landscape.js';

function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/portrait">
            <Portraits />
          </Route>
          <Route exact path="/landscape">
            <Landscape />
          </Route>
          <Route exact path="/street">
            <Street />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
