import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Row, Col } from "react-bootstrap";
import "../stylesheets/PicturePage.css";
import "../stylesheets/HomePage.css";
import Fade from "react-reveal/Fade";

import useWindowDimensions from "./useWindowDimensions";

// const folder = "./assets/portrait/"
// let images = ["stu.jpg","stu2-min.jpg"]
// images = images.map(i => folder + i);
import React, { useState, useRef, useEffect, } from "react";


export default function MyComponent(props) {
const { height, width } = useWindowDimensions();

    const {images, desktop} = props;
    return (
      <Fade>
    <PhotoProvider >
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {images.map((item, index) => (
          <PhotoView key={index} src={item} margin={20} >
            <img src={item} alt="" style={{ objectFit: 'cover', margin: desktop ? 10 : width*0.01 }} width={desktop ? width*0.15 : width*0.25} height={desktop ? width*0.15 : width*0.25}  />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
    </Fade>
  );
}