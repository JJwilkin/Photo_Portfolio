import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import Slider from "react-slick";

export default function ImageCarousel() {
//    let settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
    

        return (
            <div className="carousel">
       
               
                    

                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="Third slide"
                        />

               
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    
}
