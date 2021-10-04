import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../stylesheets/HomePage.css";
import "../stylesheets/Menu.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Menu(props) {
  const desktop = useMediaQuery("(min-width:1000px)");
  const { showFade } = props;
  const { setShowMenu } = props;
  // let selectedOption = props.selectedOption;

  const [selectedOption, setOption] = useState(props.selectedOption);

  return (
    <div style={desktop ? null : { height: "83vh" }} className="menu">
      <Fade when={showFade}>
        <Link to="/">
          <h2
            className="logo"
            onClick={() => {
              if (!desktop) {
                setOption("portrait");
                setShowMenu(false);
              }
            }}
          >
            jxshooter
          </h2>
        </Link>

        <div>
          <table>
            <tr>
              <Link
                to="/"
                onClick={() => {
                  if (!desktop) {
                    setOption("portrait");
                    setShowMenu(false);
                  }
                }}
              >
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
              <Link
                to="/toronto"
                onClick={() => {
                  if (!desktop) {
                    setOption("toronto");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col ${
                    selectedOption == "toronto" ? "active-link" : "dim-text"
                  }`}
                >
                  02
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "toronto" ? "active-link" : "dim-text"
                    }`}
                  >
                    TORONTO
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link
                to="/landscape"
                onClick={() => {
                  if (!desktop) {
                    setOption("landscape");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col ${
                    selectedOption == "landscape" ? "active-link" : "dim-text"
                  }`}
                >
                  03
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
              <Link
                to="/banff"
                onClick={() => {
                  if (!desktop) {
                    setOption("banff");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col ${
                    selectedOption == "banff" ? "active-link" : "dim-text"
                  }`}
                >
                  04
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "banff" ? "active-link" : "dim-text"
                    }`}
                  >
                    BANFF
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link
                to="/collections"
                onClick={() => {
                  if (!desktop) {
                    setOption("collections");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col ${
                    selectedOption == "collections" ? "active-link" : "dim-text"
                  }`}
                >
                  ☰
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "collections" ? "active-link" : "dim-text"
                    }`}
                  >
                    COLLECTIONS
                  </h6>
                </td>
              </Link>
            </tr>
          </table>
        </div>

        <div>
          <Link
            to="/contact"
            onClick={() => {
              if (!desktop) {
                setOption("contact");
                setShowMenu(false);
              }
            }}
          >
            <h6
              className={`${
                selectedOption == "contact" ? "active-link" : "dim-text"
              }`}
            >
              Contact Me &nbsp;+
            </h6>
          </Link>
          {desktop ? null : (
            <Link
              to="/about"
              onClick={() => {
                if (!desktop) {
                  setOption("about");
                  setShowMenu(false);
                }
              }}
            >
              <h6
                className={`${
                  selectedOption == "about" ? "active-link" : "dim-text"
                }`}
              >
                About Me &nbsp;&#10230;
              </h6>
            </Link>
          )}
        </div>
      </Fade>
    </div>
  );
}
