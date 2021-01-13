import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../stylesheets/HomePage.css";
export default function Menu(props) {
    const selectedOption = props.selectedOption;
  return (
    <div className="menu">
      <Fade bottom>
        <h2 className="logo">jxshooter</h2>
      </Fade>
      <Fade bottom cascade>
        <div>
          <table>
            <tr>
              <Link to="/portrait">
                <td className="num-col">
                  <b>01</b>
                </td>
                <td>
                  <h6>
                    <b>PORTRAIT</b>
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link to="/landscape">
                <td className="num-col">02</td>
                <td>
                  <h6>LANDSCAPE</h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link to="/street">
                <td className="num-col">03</td>
                <td>
                  <h6>STREET</h6>
                </td>
              </Link>
            </tr>
          </table>
        </div>
      </Fade>

      <Fade bottom>
        <h6>About Me &nbsp;&#10230;</h6>
      </Fade>
    </div>
  );
}
