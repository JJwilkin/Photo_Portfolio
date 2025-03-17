import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../stylesheets/App.css";
import "../../stylesheets/HomePage.css";
import "../../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import "../Collection.css";

export default function CollectionMobile(props) {
    const desktop = useMediaQuery("(min-width:1000px)");
    const { imageLoaded } = props;
    return (
        <div style={{ display: desktop ? "none" : "block" }}>
         <div>
                      <Row>
                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/portrait">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Portrait
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/portrait/stu.jpg"
                                    alt="portrait"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>
                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/weddings">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Weddings
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/wedding/DSC_5740-2.jpg"
                                    alt="weddings"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>
                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/families">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Families
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/families/DSC_4857.jpg"
                                    alt="families"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>
                        


                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/corporate">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Corporate
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/toronto/toronto11.jpg"
                                    alt="corporate"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/banff">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Banff
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/banff/blueMountain.jpg"
                                    alt="banff"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>

                        <Col lg={6} style={{ marginBottom: 30 }}>
                          <Fade opposite>
                            <Link to="/yellowstone">
                              <div>
                                <div className="image-tile">
                                  <div
                                    style={{
                                      fontSize: 25,

                                      color: "white",
                                      position: "absolute",
                                      bottom: 10,
                                      left: 20,
                                    }}
                                  >
                                    Yellowstone
                                  </div>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "30vh",
                                      objectFit: "cover",
                                    }}
                                    onLoad={imageLoaded}
                                    src="./assets/landscape/DSC_2083-2.jpg"
                                    alt="Yellowstone"
                                  />
                                </div>
                              </div>
                            </Link>
                          </Fade>
                        </Col>
                      </Row>
                    </div>
        </div>
    )
}