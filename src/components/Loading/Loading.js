import React from "react";
import Lottie from "react-lottie";
import * as loadingAnimation from './../../assets/animation/loadingAnimation.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-50 flex items-center max-h-screen"
      style={{ zIndex: "999" }}
    >
        <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Loading;
