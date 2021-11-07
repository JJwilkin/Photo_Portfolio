import React, { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Row, Col } from "react-bootstrap";
export default function MobileTitle(props) {
    const {showMenu, loading} = props;
  const desktop = useMediaQuery("(min-width:1000px)");
  return (
    <Row style={desktop ? null : { display: "none" }}>
      <Col lg={12}>
        {desktop ? null : (
          <div>
            <Fade when={!showMenu && !loading}>
              <h2
                className="logo mobile-homepage-title"
                style={{ textAlign: "right" }}
              >
                Joshua Wilkinson
              </h2>
            </Fade>
          </div>
        )}
      </Col>
    </Row>
  );
}
