import React, { useState, useRef, useEffect, } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import "../stylesheets/Hamburger.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GalleryTitleDescription from "./GalleryTitleDescription";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import LoadingAnimation from "./LoadingAnimation";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import MobileBottomNav from "./MobileBottomNav";
import ReactGA from 'react-ga';
import TestGallery from './TestGallery'
import useWindowDimensions from "./useWindowDimensions";
import { rgbToHex } from "@material-ui/core";
import WeddingAnimation from "./WeddingAnimation";


const folder = "./assets/portrait/"
// let imageList = ["stu.jpg", "stu2-min.jpg", "stu3-min.jpg"]
let imageList = ["stu.jpg", "stu2-min.jpg", "stu3-min.jpg", "DSC_5961-min.jpg", "noah1.jpg", "noah2.jpg", "hooman-min.jpg", 'hooman2-min.jpg', "hooman3-min.jpg", "DSC_6147-min.jpg", "DSC_4589.jpg", "DSC_4739.jpg", "janagan1-min.jpg", "janagan2-min.jpg", "janagan_lamp.jpg", "twins-min.jpg", "grandpa1-min.jpg", "jd2-min.jpg"]
imageList = imageList.map(i => folder + i);
const today = new Date().toISOString().slice(0, 10)

export default function Gallery(props) {

    const [selectedOption, setOption] = useState(props.selectedOption);
    const { height, width } = useWindowDimensions();

    const desktop = useMediaQuery("(min-width:1000px)");
    const { showFade, setShowFade, showMenu, setShowMenu, setTheme } = props;
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= 0) {
            setTimeout(() => {
                setShowFade(true);
                setTimeout(() => {
                    setTheme("light")

                    setLoading(false);
                }, 300);
            }, 3300);
        }
    };
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

    useEffect(() => {
        imageLoaded()
    }, [])

    return (
        <div className="App" style={{backgroundColor: 'white'}}>
            <Container fluid>
                <Row style={ !loading ? null : { display: "none" }}>
                  
                    <Col lg={12}>
                        {desktop ?
                            <div>
                                <Link to="/">
                                    <h2
                                        className="logo"
                                        style={{position:'fixed', zIndex:4, color:'black'}}
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
                            </div> : (
                                <div>
                                    <Fade when={!showMenu && !loading}>
                                        <Link to="/">
                                            <h2
                                                className="logo mobile-homepage-title"
                                                style={{ textAlign: "right", color:'black' }}
                                            >
                                                Joshua Wilkinson
                                            </h2>
                                        </Link>
                                    </Fade>
                                </div>
                            )}
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col className="main-content" style={{paddingLeft: desktop? '5vw': 0, paddingRight: desktop? '5vw': 0}} lg={12}>
                                <Fade opposite>
                                    <div
                                        style={{ display: loading ? "flex" : "none" }}
                                        className="max-height center-content"
                                    >
                                        <WeddingAnimation/>
                                    </div>
                                </Fade>
                                <div style={{ display: loading ? "none" : "block" }}>
                                    <div style={{display: "flex", justifyContent: 'center', marginTop:15, marginBottom: 15}}>
                                    <GalleryTitleDescription
                                        color="black"
                                        title="Him and Her"
                                        description='"Brief description of the event and day."'
                                        date={today}
                                        style={{ display: loading ? "none" : "block" }}
                                    />
                                    </div>
                                   

                                    <div style={{ display: desktop ? "block" : "block" }}>
                                        <TestGallery images={imageList} desktop={desktop} />


                                    </div>



                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                {/* <Row style={loading ? { display: "none" } : null}>
                    <Col lg={11} style={{display:'flex', justifyContent:'center'}}>
                        {desktop ? null : (
                            <MobileBottomNav name="Corporate" route="/corporate" />
                        )}
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}
