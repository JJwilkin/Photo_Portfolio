import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../stylesheets/HomePage.css";
import "../stylesheets/Menu.css";
import { InstagramOutlined } from "@ant-design/icons";

export default function RightMenu(props) {
  const { showFade, setShowFade } = props;
  const selectedOption = props.selectedOption;
  return (
    <div className="right-menu">
      <Fade when={showFade}>
      <div className="margin-right">
        <a target="_blank" href="https://instagram.com/jxshooter/">
          <InstagramOutlined style={{ fontSize: 30 }} />
        </a>
      </div>

      <div></div>
      <div className="margin-right">
        <Link to="/about">
          <h6
            className={`${
              selectedOption == "about" ? "active-link" : "dim-text"
            }`}
          >
            About Me &nbsp;&#10230;
          </h6>
        </Link>
      </div>
      </Fade>
    </div>
  );
}
