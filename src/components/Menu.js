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
                setOption("collections");
                setShowMenu(false);
              }
            }}
          >
            Joshua Wilkinson
          </h2>
        </Link>

        <div>
          <table>
          
           
            <tr>
              <Link
                to="/portrait"
                onClick={() => {
                  if (!desktop) {
                    setOption("portrait");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col menu-text ${
                    selectedOption == "portrait" ? "active-link" : "dim-text"
                  }`}
                >
                  01
                </td>
                <td>
                  <h6
                    className={`menu-text ${
                      selectedOption == "portrait" ? "active-link" : "dim-text"
                    }`}
                  >
                    Portraits
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link
                to="/weddings"
                onClick={() => {
                  if (!desktop) {
                    setOption("weddings");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`menu-text num-col ${
                    selectedOption == "weddings" ? "active-link" : "dim-text"
                  }`}
                >
                  02
                </td>
                <td>
                  <h6
                    className={`menu-text ${
                      selectedOption == "weddings" ? "active-link" : "dim-text"
                    }`}
                  >
                    Weddings
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link
                to="/families"
                onClick={() => {
                  if (!desktop) {
                    setOption("families");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col menu-text ${
                    selectedOption == "families" ? "active-link" : "dim-text"
                  }`}
                >
                  03
                </td>
                <td>
                  <h6
                    className={`menu-text ${
                      selectedOption == "families" ? "active-link" : "dim-text"
                    }`}
                  >
                    Families
                  </h6>
                </td>
              </Link>
            </tr>
            <tr>
              <Link
                to="/corporate"
                onClick={() => {
                  if (!desktop) {
                    setOption("corporate");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col menu-text ${
                    selectedOption == "corporate" ? "active-link" : "dim-text"
                  }`}
                >
                  04
                </td>
                <td>
                  <h6
                    className={` menu-text ${
                      selectedOption == "corporate" ? "active-link" : "dim-text"
                    }`}
                  >
                    Corporate
                  </h6>
                </td>
              </Link>
            </tr>
            {/* <tr>
              <Link
                to="/yellowstone"
                onClick={() => {
                  if (!desktop) {
                    setOption("yellowstone");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col ${
                    selectedOption == "yellowstone" ? "active-link" : "dim-text"
                  }`}
                >
                  04
                </td>
                <td>
                  <h6
                    className={`${
                      selectedOption == "yellowstone" ? "active-link" : "dim-text"
                    }`}
                  >
                    YELLOWSTONE
                  </h6>
                </td>
              </Link>
            </tr> */}
            {/* <tr>
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
                  05
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
            </tr> */}
            <tr>
              <Link
                to="/"
                onClick={() => {
                  if (!desktop) {
                    setOption("collections");
                    setShowMenu(false);
                  }
                }}
              >
                <td
                  className={`num-col menu-text ${
                    selectedOption == "collections" ? "active-link" : "dim-text"
                  }`}
                >
                  ☰
                </td>
                <td>
                  <h6
                    className={`menu-text ${
                      selectedOption == "collections" ? "active-link" : "dim-text"
                    }`}
                  >
                    Collections
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
              className={`menu-text ${
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
                className={`menu-text ${
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
