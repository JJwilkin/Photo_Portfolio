import React from "react";
import Lottie from "react-lottie";
import animationData from "./wedding_lottie.json";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function WeddingAnimation() {
  const desktop = useMediaQuery('(min-width:600px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie  options={defaultOptions} height={desktop ? 400: 300 } width={desktop ? 400: 300 }  />;
}
