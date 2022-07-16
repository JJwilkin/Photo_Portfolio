import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from 'react-ga';
import "../stylesheets/wedding-page.css";

export default function WeddingPage(props) {
  const desktop = useMediaQuery("(min-width:1000px)");

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <div class="wedding-page-container">
        <div class="first-page">
          <div class="left-text">
            <h1>{props.name1} & {props.name2}</h1>
            <h1>{props.lastName}</h1>
          </div>
          <div class="oval-image">
            <img src={props.firstImageSrc}/>
          </div>
        </div>
    </div>
  );
}
