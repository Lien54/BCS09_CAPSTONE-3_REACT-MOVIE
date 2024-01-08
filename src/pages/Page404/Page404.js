import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as page404Animation from "./../../assets/animation/page404Animation.json";

const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: page404Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-50 flex flex-col justify-center max-h-screen"
      style={{ zIndex: "999" }}
    >
      <Lottie options={defaultOptions} height={500} width={500} />
      <button className="mt-8">
        <Link className="rounded-md p-3 bg-orange-500" to={"/"}> Trở về trang chủ </Link>
      </button>
    </div>
  );
};

export default Page404;
