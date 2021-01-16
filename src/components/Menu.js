import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../stylesheets/HomePage.css";
import "../stylesheets/Menu.css";

export default function Menu(props) {
  const { showFade, setShowFade } = props;
  const selectedOption = props.selectedOption;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowFade(true);
  //   }, 1500);
  // }, []);
  return (
    <div className="menu">
      <Fade when={showFade}>
        <Link to="/">
          <h2 className="logo">jxshooter</h2>
        </Link>

        <div>
          <table>
            <tr>
              <Link to="/">
                <td
                  className={`num-col ${
                    selectedOption == "portrait" ? "active-link" : "dim-text"
                  }`}
                >
                  01
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "portrait" ? "active-link" : "dim-text"
                    }`}
                  >
                    PORTRAIT
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link to="/landscape">
                <td
                  className={`num-col ${
                    selectedOption == "landscape" ? "active-link" : "dim-text"
                  }`}
                >
                  02
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "landscape" ? "active-link" : "dim-text"
                    }`}
                  >
                    LANDSCAPE
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link to="/street">
                <td
                  className={`num-col ${
                    selectedOption == "street" ? "active-link" : "dim-text"
                  }`}
                >
                  03
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "street" ? "active-link" : "dim-text"
                    }`}
                  >
                    STREET
                  </h6>
                </td>
              </Link>
            </tr>
          </table>
        </div>

        <div>
          <Link to="/contact">
            <h6
              className={`${
                selectedOption == "about" ? "active-link" : "dim-text"
              }`}
            >
              Contact Me &nbsp;+
            </h6>
            {/* <svg width="90" height="90">
          <circle
            cx="45"
            cy="45 "
            r="42"
            stroke="white"
            stroke-width="2"
            fill="black"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            stroke="white"
            fill="white"
            stroke-width="0.8px"
            font-size="12px"
            dy="-5px"
          >
            Contact
          </text>
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            stroke="white"
            fill="white"
            stroke-width="1px"
            font-size="12px"
            dy="15px"
          >
            Me
          </text>
        </svg> */}
          </Link>
        </div>
      </Fade>
    </div>
  );
}
